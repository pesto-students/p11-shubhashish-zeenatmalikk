class CustomPromise {
    constructor(executor) {
      this.state = 'pending'; 
      this.value = undefined; 
      this.onFulfilledCallbacks = []; 
      this.onRejectedCallbacks = [];  
  
      const resolve = (value) => {
        if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;
          this.executeCallbacks(this.onFulfilledCallbacks);
        }
      };
  
      const reject = (reason) => {
        if (this.state === 'pending') {
          this.state = 'rejected';
          this.value = reason;
          this.executeCallbacks(this.onRejectedCallbacks);
        }
      };
  
      try {
        executor(resolve, reject); 
      } catch (error) {
        reject(error); 
      }
    }
  
    then(onFulfilled, onRejected) {
      return new CustomPromise((resolve, reject) => {
        const fulfilledHandler = () => {
          try {
            if (typeof onFulfilled === 'function') {
              const result = onFulfilled(this.value);
              if (result instanceof CustomPromise) {
                result.then(resolve, reject);
              } else {
                resolve(result);
              }
            } else {
              resolve(this.value);
            }
          } catch (error) {
            reject(error);
          }
        };
  
        const rejectedHandler = () => {
          try {
            if (typeof onRejected === 'function') {
              const result = onRejected(this.value);
              if (result instanceof CustomPromise) {
                result.then(resolve, reject);
              } else {
                resolve(result);
              }
            } else {
              reject(this.value);
            }
          } catch (error) {
            reject(error);
          }
        };
  
        if (this.state === 'fulfilled') {
          setTimeout(fulfilledHandler, 0); 
        } else if (this.state === 'rejected') {
          setTimeout(rejectedHandler, 0); 
        } else {
          this.onFulfilledCallbacks.push(fulfilledHandler);
          this.onRejectedCallbacks.push(rejectedHandler);
        }
      });
    }
  
    catch(onRejected) {
      return this.then(null, onRejected);
    }
  
    executeCallbacks(callbacks) {
      setTimeout(() => {
        for (const callback of callbacks) {
          callback();
        }
      }, 0);
    }
  
    static resolve(value) {
      return new CustomPromise((resolve) => {
        resolve(value);
      });
    }
  
    static reject(reason) {
      return new CustomPromise((_, reject) => {
        reject(reason);
      });
    }
  }
  

  //TEST
  const myPromise = new CustomPromise((resolve, reject) => {
    // Resolve the Promise after 1 second
    setTimeout(() => {
      resolve("Success!");
    }, 1000);
  });
  
  myPromise
    .then((result) => {
      console.log(result); // Output: Success!
    })
    .catch((error) => {
      console.error(error);
    });
  