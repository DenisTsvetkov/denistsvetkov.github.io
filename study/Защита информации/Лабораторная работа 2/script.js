function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }

      

      var k1 = 10000;
      var k2 = 100000;

      var k = 15;

      var simpleNumber = getRandomInt(k1, k2);

      // тест Миллера — Рабина на простоту числа
      // производится k раундов проверки числа n на простоту
      function MillerRabinTest(n, k)
      {
          // если n == 2 или n == 3 - эти числа простые, возвращаем true
          if (n == 2 || n == 3)
              return true;
       
          // если n < 2 или n четное - возвращаем false
          if (n < 2 || n % 2 == 0)
              return false;
       
          // представим n − 1 в виде (2^s)·t, где t нечётно, это можно сделать последовательным делением n - 1 на 2
          var t = n - 1;
       
          s = 0;
       
          while (t % 2 == 0)
          {
              t /= 2;
              s += 1;
          }
       
          // повторить k раз
          for (var i = 0; i < k; i++)
          {
              // выберем случайное целое число a в отрезке [2, n − 2]
              //RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider();
          var a = getRandomInt(2, n-2);
          // var _a = [];
         //      _a = new byte[n.ToByteArray().LongLength];
       
         //      var a;
       
         //      do
         //      {
         //          rng.GetBytes(_a);
         //          a = new BigInteger(_a);
         //      }
         //      while (a < 2 || a >= n - 2);
       
              // x ← a^t mod n, вычислим с помощью возведения в степень по модулю

              x = Math.pow(a, t) % n;
       
              // если x == 1 или x == n − 1, то перейти на следующую итерацию цикла
              if (x == 1 || x == n - 1)
                  continue;
       
              // повторить s − 1 раз
              for (r = 1; r < s; r++)
              {
                  // x ← x^2 mod n
                  x = Math.pow(x, 2) % n;
       
                  // если x == 1, то вернуть "составное"
                  if (x == 1)
                      return false;
       
                  // если x == n − 1, то перейти на следующую итерацию внешнего цикла
                  if (x == n - 1)
                      break;
              }
       
              if (x != n - 1)
                  return false;
          }
       
          // вернуть "вероятно простое"
          return true;
      }
      
      while(MillerRabinTest(simpleNumber, k) != true && simpleNumber < k2){
        simpleNumber += 1;
      }
      console.log('Число: ', simpleNumber, ' Простое: ', MillerRabinTest(simpleNumber, k));