<template>
  <div>
    <h1>代理模式</h1>
    <p> Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写</p>
    <el-button type="primary"
               @click="createCache">缓存代理</el-button>
    <el-button type="primary"
               @click="createValid">验证代理</el-button>
  </div>
</template>
<script>
  export default {
    name: "Proxy",
    data() {
      return {};
    },
    methods: {
      createCache() {
        //缓存代理
        const getFib = number => {
          if (number <= 2) {
            return 1;
          } else {
            return getFib(number - 1) + getFib(number - 2);
          }
        };
        const cacheProxy = (fn, caches = new Map()) => {
          return new Proxy(fn, {
            apply(fn, ctx, args) {
              const key = args.join(" ");
              if (caches.has(key)) {
                console.log("cache获取" + caches.get(key));
                return caches.get(key);
              } else {
                const result = fn(...args);
                caches.set(key, result);
                console.log(result);
                return result;
              }
            }
          });
        };
        const ProxyFib = cacheProxy(getFib);
        ProxyFib(40);
        ProxyFib(40);
      },
      createValid() {
        // 验证代理
        const mei = {
          age: "",
          sex: ""
        };
        const validate = {
          age: val => {
            return {
              valid: val > 18,
              error: "age is less then 18 "
            };
          },
          sex: val => {
            return {
              valid: val === "man",
              error: "sex is not man"
            };
          }
        };
        const validProxy = (target, validate) => {
          return new Proxy(target, {
            set: (target, prop, val) => {
              if (validate[prop](val).valid) {
                target[prop] = val;
              } else {
                console.log(validate[prop](val).error);
              }
              return target;
            }
          });
        };
        let meiProxy = validProxy(mei, validate);
        meiProxy.age = 12;
      }
    }
  };
</script>