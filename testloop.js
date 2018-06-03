var __ = require('lodash');

class TestLoopPerforamnces {
    measureLoopPerformances() {

        console.log('\x1b[31m', 'One Dimensional Array'); // red
        this.measureOneDimensionArrayPerformance();
        console.log('\x1b[31m', 'One Dimensional Array'); // red

        console.log('\x1b[32m', 'Two Dimensional Array'); // yellow
        this.measureTwoDimensionArrayPerformance();
        console.log('\x1b[32m', 'Two Dimensional Array'); // yellow

    }

    classicalForWithSingleDimensionArray (arrData) {
        let temp;
        let diff;
        let start;
        let end;
        const tDiff = [];

        // 1
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            // Do some calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        // 2
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            // Do some calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        // 3
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            // Do some calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        // 4
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            // Do some calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        // 5
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            // Do some calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        // 6
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            // Do some calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        // 7
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            // Do some calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        // 8
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            // Do some calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        // 9
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            // Do some calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        // 10
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            // Do some calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        const avgTime = tDiff.reduce((a, b) => a + b, 0) / tDiff.length;
        console.log('Average time for Classical For Loop: ' + avgTime + ' msecs');
    }

    classicalForWithLengthWithSingleDimensionArray (arrData) {
      let temp;
      let diff;
      let start;
      let end;
      const tDiff = [];

      // 1
      start = process.hrtime();
      for (let p = 0, pLen = arrData.length; p < pLen; p++) {
          // Do some calculation
          temp++;
      }
      end = process.hrtime(start);
      diff = end[1] / 1000000;
      tDiff.push(diff);
      console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

      // 2
      start = process.hrtime();
      for (let p = 0, pLen = arrData.length; p < pLen; p++) {
          // Do some calculation
          temp++;
      }
      end = process.hrtime(start);
      diff = end[1] / 1000000;
      tDiff.push(diff);
      console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

      // 3
      start = process.hrtime();
      for (let p = 0, pLen = arrData.length; p < pLen; p++) {
          // Do some calculation
          temp++;
      }
      end = process.hrtime(start);
      diff = end[1] / 1000000;
      tDiff.push(diff);
      console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

      // 4
      start = process.hrtime();
      for (let p = 0, pLen = arrData.length; p < pLen; p++) {
          // Do some calculation
          temp++;
      }
      end = process.hrtime(start);
      diff = end[1] / 1000000;
      tDiff.push(diff);
      console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

      // 5
      start = process.hrtime();
      for (let p = 0, pLen = arrData.length; p < pLen; p++) {
          // Do some calculation
          temp++;
      }
      end = process.hrtime(start);
      diff = end[1] / 1000000;
      tDiff.push(diff);
      console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

      // 6
      start = process.hrtime();
      for (let p = 0, pLen = arrData.length; p < pLen; p++) {
          // Do some calculation
          temp++;
      }
      end = process.hrtime(start);
      diff = end[1] / 1000000;
      tDiff.push(diff);
      console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

      // 7
      start = process.hrtime();
      for (let p = 0, pLen = arrData.length; p < pLen; p++) {
          // Do some calculation
          temp++;
      }
      end = process.hrtime(start);
      diff = end[1] / 1000000;
      tDiff.push(diff);
      console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

      // 8
      start = process.hrtime();
      for (let p = 0, pLen = arrData.length; p < pLen; p++) {
          // Do some calculation
          temp++;
      }
      end = process.hrtime(start);
      diff = end[1] / 1000000;
      tDiff.push(diff);
      console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

      // 9
      start = process.hrtime();
      for (let p = 0, pLen = arrData.length; p < pLen; p++) {
          // Do some calculation
          temp++;
      }
      end = process.hrtime(start);
      diff = end[1] / 1000000;
      tDiff.push(diff);
      console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

      // 10
      start = process.hrtime();
      for (let p = 0, pLen = arrData.length; p < pLen; p++) {
          // Do some calculation
          temp++;
      }
      end = process.hrtime(start);
      diff = end[1] / 1000000;
      tDiff.push(diff);
      console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

      const avgTime = tDiff.reduce((a, b) => a + b, 0) / tDiff.length;
      console.log('Average time for Classical For, array length defined: ' + avgTime + ' msecs');
    }

    reversedForWithSingleDimensionArray (arrData) {
        let temp;
        let diff;
        let start;
        let end;
        const tDiff = [];

        // 1
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop : ' + diff + ' msecs');

        // 2
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop : ' + diff + ' msecs');

        // 3
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop : ' + diff + ' msecs');

        // 4
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop : ' + diff + ' msecs');

        // 5
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop : ' + diff + ' msecs');

        // 6
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop : ' + diff + ' msecs');

        // 7
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop : ' + diff + ' msecs');

        // 8
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop : ' + diff + ' msecs');

        // 9
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop : ' + diff + ' msecs');

        // 10
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop : ' + diff + ' msecs');

        const avgTime = tDiff.reduce((a, b) => a + b, 0) / tDiff.length;
        console.log('Average time for Reversed For Loop: ' + avgTime + ' msecs');
    }

    reversedWhileWithSingleDimensionArray (arrData) {
    let temp;
    let diff;
    let start;
    let end;
    const tDiff = [];

    // 1
    let length = arrData.length;
    start = process.hrtime();
    while (length--) {
      // Do some dummy calculation
      temp++;
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');

    // 2
    length = arrData.length;
    start = process.hrtime();
    while (length--) {
      // Do some dummy calculation
      temp++;
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');

    // 3
    length = arrData.length;
    start = process.hrtime();
    while (length--) {
      // Do some dummy calculation
      temp++;
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');

    // 4
    length = arrData.length;
    start = process.hrtime();
    while (length--) {
      // Do some dummy calculation
      temp++;
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');

    // 5
    length = arrData.length;
    start = process.hrtime();
    while (length--) {
      // Do some dummy calculation
      temp++;
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');

    // 6
    length = arrData.length;
    start = process.hrtime();
    while (length--) {
      // Do some dummy calculation
      temp++;
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');

    // 7
    length = arrData.length;
    start = process.hrtime();
    while (length--) {
      // Do some dummy calculation
      temp++;
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');

    // 8
    length = arrData.length;
    start = process.hrtime();
    while (length--) {
      // Do some dummy calculation
      temp++;
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');

    // 9
    length = arrData.length;
    start = process.hrtime();
    while (length--) {
      // Do some dummy calculation
      temp++;
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');

    // 10
    length = arrData.length;
    start = process.hrtime();
    while (length--) {
      // Do some dummy calculation
      temp++;
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');

    const avgTime = tDiff.reduce((a, b) => a + b, 0) / tDiff.length;
    console.log('Average time for Reversed While Loop: ' + avgTime + ' msecs');
  }

    es6WithSingleDimensionArray (arrData) {
        let temp;
        let diff;
        let start;
        let end;
        const tDiff = [];

        // 1
        start = process.hrtime();
        for (const pVal of arrData) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        // 2
        start = process.hrtime();
        for (const pVal of arrData) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        // 3
        start = process.hrtime();
        for (const pVal of arrData) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        // 4
        start = process.hrtime();
        for (const pVal of arrData) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        // 5
        start = process.hrtime();
        for (const pVal of arrData) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        // 6
        start = process.hrtime();
        for (const pVal of arrData) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        // 7
        start = process.hrtime();
        for (const pVal of arrData) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        // 8
        start = process.hrtime();
        for (const pVal of arrData) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        // 9
        start = process.hrtime();
        for (const pVal of arrData) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        // 10
        start = process.hrtime();
        for (const pVal of arrData) {
            // Do some dummy calculation
            temp++;
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        const avgTime = tDiff.reduce((a, b) => a + b, 0) / tDiff.length;
        console.log('Average time for ES6 of Loop: ' + avgTime + ' msecs');
    }

    forEachWithSingleDimensionArray (arrData) {
        let temp;
        let diff;
        let start;
        let end;
        const tDiff = [];

        // 1
        start = process.hrtime();
        arrData.forEach((pVal) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        // 2
        start = process.hrtime();
        arrData.forEach((pVal) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        // 3
        start = process.hrtime();
        arrData.forEach((pVal) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        // 4
        start = process.hrtime();
        arrData.forEach((pVal) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        // 5
        start = process.hrtime();
        arrData.forEach((pVal) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        // 6
        start = process.hrtime();
        arrData.forEach((pVal) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        // 7
        start = process.hrtime();
        arrData.forEach((pVal) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        // 8
        start = process.hrtime();
        arrData.forEach((pVal) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        // 9
        start = process.hrtime();
        arrData.forEach((pVal) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        // 10
        start = process.hrtime();
        arrData.forEach((pVal) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        const avgTime = tDiff.reduce((a, b) => a + b, 0) / tDiff.length;
        console.log('Average time for For Each Loop: ' + avgTime + ' msecs');
    }

    lodashForEachWithSingleDimensionArray (arrData) {
        let temp;
        let diff;
        let start;
        let end;
        const tDiff = [];

        // 1
        start = process.hrtime();
        __.forEach(arrData, (value) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        // 2
        start = process.hrtime();
        __.forEach(arrData, (value) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        // 3
        start = process.hrtime();
        __.forEach(arrData, (value) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        // 4
        start = process.hrtime();
        __.forEach(arrData, (value) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        // 5
        start = process.hrtime();
        __.forEach(arrData, (value) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        // 6
        start = process.hrtime();
        __.forEach(arrData, (value) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        // 7
        start = process.hrtime();
        __.forEach(arrData, (value) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        // 8
        start = process.hrtime();
        __.forEach(arrData, (value) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        // 9
        start = process.hrtime();
        __.forEach(arrData, (value) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        // 10
        start = process.hrtime();
        __.forEach(arrData, (value) => {
            temp++;
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        const avgTime = tDiff.reduce((a, b) => a + b, 0) / tDiff.length;
        console.log('Average time for Lodash foreach Loop: ' + avgTime + ' msecs');
    }

    measureOneDimensionArrayPerformance() {

        const arrData = [];
        for (let i = 0; i < 10000000; i++) {
            arrData.push(i);
        }

        this.classicalForWithSingleDimensionArray(arrData);
        this.classicalForWithLengthWithSingleDimensionArray(arrData);
        this.reversedForWithSingleDimensionArray(arrData);
        this.reversedWhileWithSingleDimensionArray(arrData);
        this.forEachWithSingleDimensionArray(arrData);
        this.lodashForEachWithSingleDimensionArray(arrData);
        this.es6WithSingleDimensionArray(arrData);
    }

    classicalForWithTwoDimensionArray (arrData) {
        let temp;
        let diff;
        let start;
        let end;
        const tDiff = [];

        // 1
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            for (let c = 0; c < arrData[p].length; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        // 2
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            for (let c = 0; c < arrData[p].length; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        // 3
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            for (let c = 0; c < arrData[p].length; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        // 4
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            for (let c = 0; c < arrData[p].length; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        // 5
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            for (let c = 0; c < arrData[p].length; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        // 6
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            for (let c = 0; c < arrData[p].length; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        // 7
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            for (let c = 0; c < arrData[p].length; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        // 8
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            for (let c = 0; c < arrData[p].length; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        // 9
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            for (let c = 0; c < arrData[p].length; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        // 10
        start = process.hrtime();
        for (let p = 0; p < arrData.length; p++) {
            for (let c = 0; c < arrData[p].length; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For Loop: ' + diff + ' msecs');

        const avgTime = tDiff.reduce((a, b) => a + b, 0) / tDiff.length;
        console.log('Average time for Classical For Loop: ' + avgTime + ' msecs');
    }

    classicalForWithLengthWithTwoDimensionArray (arrData) {
        let temp;
        let diff;
        let start;
        let end;
        const tDiff = [];

        // 1
        start = process.hrtime();
        for (let p = 0, pLen = arrData.length; p < pLen; p++) {
            for (let c = 0, cLen = arrData[p].length; c < cLen; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

        // 2
        start = process.hrtime();
        for (let p = 0, pLen = arrData.length; p < pLen; p++) {
            for (let c = 0, cLen = arrData[p].length; c < cLen; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

        // 3
        start = process.hrtime();
        for (let p = 0, pLen = arrData.length; p < pLen; p++) {
            for (let c = 0, cLen = arrData[p].length; c < cLen; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

        // 4
        start = process.hrtime();
        for (let p = 0, pLen = arrData.length; p < pLen; p++) {
            for (let c = 0, cLen = arrData[p].length; c < cLen; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

        // 5
        start = process.hrtime();
        for (let p = 0, pLen = arrData.length; p < pLen; p++) {
            for (let c = 0, cLen = arrData[p].length; c < cLen; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

        // 6
        start = process.hrtime();
        for (let p = 0, pLen = arrData.length; p < pLen; p++) {
            for (let c = 0, cLen = arrData[p].length; c < cLen; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

        // 7
        start = process.hrtime();
        for (let p = 0, pLen = arrData.length; p < pLen; p++) {
            for (let c = 0, cLen = arrData[p].length; c < cLen; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

        // 8
        start = process.hrtime();
        for (let p = 0, pLen = arrData.length; p < pLen; p++) {
            for (let c = 0, cLen = arrData[p].length; c < cLen; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

        // 9
        start = process.hrtime();
        for (let p = 0, pLen = arrData.length; p < pLen; p++) {
            for (let c = 0, cLen = arrData[p].length; c < cLen; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

        // 10
        start = process.hrtime();
        for (let p = 0, pLen = arrData.length; p < pLen; p++) {
            for (let c = 0, cLen = arrData[p].length; c < cLen; c++) {
                // Do some calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Classical For, array length defined in loop: ' + diff + ' msecs');

        const avgTime = tDiff.reduce((a, b) => a + b, 0) / tDiff.length;
        console.log('Average time for Classical For, array length: ' + avgTime + ' msecs');
    }

    reversedForWithTwoDimensionArray (arrData) {
        let temp;
        let diff;
        let start;
        let end;
        const tDiff = [];

        // 1
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            for (let cLen = arrData[p].length, c = cLen - 1; c >= 0; c--) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop : ' + diff + ' msecs');

        // 2
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            for (let cLen = arrData[p].length, c = cLen - 1; c >= 0; c--) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop : ' + diff + ' msecs');

        // 3
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            for (let cLen = arrData[p].length, c = cLen - 1; c >= 0; c--) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop : ' + diff + ' msecs');

        // 4
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            for (let cLen = arrData[p].length, c = cLen - 1; c >= 0; c--) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop : ' + diff + ' msecs');

        // 5
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            for (let cLen = arrData[p].length, c = cLen - 1; c >= 0; c--) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop : ' + diff + ' msecs');

        // 6
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            for (let cLen = arrData[p].length, c = cLen - 1; c >= 0; c--) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop : ' + diff + ' msecs');

        // 7
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            for (let cLen = arrData[p].length, c = cLen - 1; c >= 0; c--) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop : ' + diff + ' msecs');

        // 8
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            for (let cLen = arrData[p].length, c = cLen - 1; c >= 0; c--) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop : ' + diff + ' msecs');

        // 9
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            for (let cLen = arrData[p].length, c = cLen - 1; c >= 0; c--) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop : ' + diff + ' msecs');

        // 10
        start = process.hrtime();
        for (let pLen = arrData.length, p = pLen - 1; p >= 0; p--) {
            for (let cLen = arrData[p].length, c = cLen - 1; c >= 0; c--) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Reversed For Loop: ' + diff + ' msecs');

        const avgTime = tDiff.reduce((a, b) => a + b, 0) / tDiff.length;
        console.log('Average time for Reversed For Loop: ' + avgTime + ' msecs');
    }

    reversedWhileWithTwoDimensionArray (arrData) {
    let temp;
    let diff;
    let start;
    let end;
    const tDiff = [];

    // 1
    let pLength = arrData.length;
    start = process.hrtime();
    while (pLength--) {
      let cLength = arrData[pLength].length;
      while (cLength--) {
        // Do some dummy calculation
        temp++;
      }
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');

    // 2
    pLength = arrData.length;
    start = process.hrtime();
    while (pLength--) {
      let cLength = arrData[pLength].length;
      while (cLength--) {
        // Do some dummy calculation
        temp++;
      }
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');

    // 3
    pLength = arrData.length;
    start = process.hrtime();
    while (pLength--) {
      let cLength = arrData[pLength].length;
      while (cLength--) {
        // Do some dummy calculation
        temp++;
      }
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');

    // 4
    pLength = arrData.length;
    start = process.hrtime();
    while (pLength--) {
      let cLength = arrData[pLength].length;
      while (cLength--) {
        // Do some dummy calculation
        temp++;
      }
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');

    // 5
    pLength = arrData.length;
    start = process.hrtime();
    while (pLength--) {
      let cLength = arrData[pLength].length;
      while (cLength--) {
        // Do some dummy calculation
        temp++;
      }
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');

    // 6
    pLength = arrData.length;
    start = process.hrtime();
    while (pLength--) {
      let cLength = arrData[pLength].length;
      while (cLength--) {
        // Do some dummy calculation
        temp++;
      }
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');

    // 7
    pLength = arrData.length;
    start = process.hrtime();
    while (pLength--) {
      let cLength = arrData[pLength].length;
      while (cLength--) {
        // Do some dummy calculation
        temp++;
      }
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');

    // 8
    pLength = arrData.length;
    start = process.hrtime();
    while (pLength--) {
      let cLength = arrData[pLength].length;
      while (cLength--) {
        // Do some dummy calculation
        temp++;
      }
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');// reversed while loop

    // 9
    pLength = arrData.length;
    start = process.hrtime();
    while (pLength--) {
      let cLength = arrData[pLength].length;
      while (cLength--) {
        // Do some dummy calculation
        temp++;
      }
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');

    // 10
    pLength = arrData.length;
    start = process.hrtime();
    while (pLength--) {
      let cLength = arrData[pLength].length;
      while (cLength--) {
        // Do some dummy calculation
        temp++;
      }
    }
    end = process.hrtime(start);
    diff = end[1] / 1000000;
    tDiff.push(diff);
    console.log('Reversed While Loop: ' + diff + ' msecs');

    const avgTime = tDiff.reduce((a, b) => a + b, 0) / tDiff.length;
    console.log('Average time for Reversed While Loop: ' + avgTime + ' msecs');
  }

    es6WithTwoDimensionArray (arrData) {
        let temp;
        let diff;
        let start;
        let end;
        const tDiff = [];

        // 1
        start = process.hrtime();
        for (const pVal of arrData) {
            for (const cVal of pVal) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        // 2
        start = process.hrtime();
        for (const pVal of arrData) {
            for (const cVal of pVal) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        // 3
        start = process.hrtime();
        for (const pVal of arrData) {
            for (const cVal of pVal) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        // 4
        start = process.hrtime();
        for (const pVal of arrData) {
            for (const cVal of pVal) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        // 5
        start = process.hrtime();
        for (const pVal of arrData) {
            for (const cVal of pVal) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        // 6
        start = process.hrtime();
        for (const pVal of arrData) {
            for (const cVal of pVal) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        // 7
        start = process.hrtime();
        for (const pVal of arrData) {
            for (const cVal of pVal) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        // 8
        start = process.hrtime();
        for (const pVal of arrData) {
            for (const cVal of pVal) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        // 9
        start = process.hrtime();
        for (const pVal of arrData) {
            for (const cVal of pVal) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        // 10
        start = process.hrtime();
        for (const pVal of arrData) {
            for (const cVal of pVal) {
                // Do some dummy calculation
                temp++;
            }
        }
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('ES6 of Loop: ' + diff + ' msecs');

        const avgTime = tDiff.reduce((a, b) => a + b, 0) / tDiff.length;
        console.log('Average time for ES6 of Loop: ' + avgTime + ' msecs');
    }

    forEachWithTwoDimensionArray (arrData) {
        let temp;
        let diff;
        let start;
        let end;
        const tDiff = [];

        // 1
        start = process.hrtime();
        arrData.forEach((pVal) => {
            pVal.forEach((cVal) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        // 2
        start = process.hrtime();
        arrData.forEach((pVal) => {
            pVal.forEach((cVal) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        // 3
        start = process.hrtime();
        arrData.forEach((pVal) => {
            pVal.forEach((cVal) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        // 4
        start = process.hrtime();
        arrData.forEach((pVal) => {
            pVal.forEach((cVal) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        // 5
        start = process.hrtime();
        arrData.forEach((pVal) => {
            pVal.forEach((cVal) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        // 6
        start = process.hrtime();
        arrData.forEach((pVal) => {
            pVal.forEach((cVal) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        // 7
        start = process.hrtime();
        arrData.forEach((pVal) => {
            pVal.forEach((cVal) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        // 8
        start = process.hrtime();
        arrData.forEach((pVal) => {
            pVal.forEach((cVal) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        // 9
        start = process.hrtime();
        arrData.forEach((pVal) => {
            pVal.forEach((cVal) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        // 10
        start = process.hrtime();
        arrData.forEach((pVal) => {
            pVal.forEach((cVal) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('For Each Loop: ' + diff + ' msecs');

        const avgTime = tDiff.reduce((a, b) => a + b, 0) / tDiff.length;
        console.log('Average time For Each Loop: ' + avgTime + ' msecs');
    }

    LodashForEachWithTwoDimensionArray (arrData) {
        let temp;
        let diff;
        let start;
        let end;
        const tDiff = [];

        // 1
        start = process.hrtime();
        __.forEach(arrData, (pValue) => {
            __.forEach(pValue, (cValue) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        // 2
        start = process.hrtime();
        __.forEach(arrData, (pValue) => {
            __.forEach(pValue, (cValue) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        // 3
        start = process.hrtime();
        __.forEach(arrData, (pValue) => {
            __.forEach(pValue, (cValue) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        // 4
        start = process.hrtime();
        __.forEach(arrData, (pValue) => {
            __.forEach(pValue, (cValue) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        // 5
        start = process.hrtime();
        __.forEach(arrData, (pValue) => {
            __.forEach(pValue, (cValue) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        // 6
        start = process.hrtime();
        __.forEach(arrData, (pValue) => {
            __.forEach(pValue, (cValue) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        // 7
        start = process.hrtime();
        __.forEach(arrData, (pValue) => {
            __.forEach(pValue, (cValue) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        // 8
        start = process.hrtime();
        __.forEach(arrData, (pValue) => {
            __.forEach(pValue, (cValue) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        // 9
        start = process.hrtime();
        __.forEach(arrData, (pValue) => {
            __.forEach(pValue, (cValue) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        // 10
        start = process.hrtime();
        __.forEach(arrData, (pValue) => {
            __.forEach(pValue, (cValue) => {
                temp++;
            });
        });
        end = process.hrtime(start);
        diff = end[1] / 1000000;
        tDiff.push(diff);
        console.log('Lodash foreach Loop: ' + diff + ' msecs');

        const avgTime = tDiff.reduce((a, b) => a + b, 0) / tDiff.length;
        console.log('Average time for Lodash foreach Loop: ' + avgTime + ' msecs');
    }

    measureTwoDimensionArrayPerformance() {

        const arrData = [];
        // preparing sample data
        for (let p = 0; p < 10000; p++) {
            arrData[p] = [];
            for (let c = 0; c < 10000; c++) {
                arrData[p].push(c);
            }
        }

        this.classicalForWithTwoDimensionArray(arrData);
        this.classicalForWithLengthWithTwoDimensionArray(arrData);
        this.reversedForWithTwoDimensionArray(arrData);
        this.reversedWhileWithTwoDimensionArray(arrData);
        this.forEachWithTwoDimensionArray(arrData);
        this.LodashForEachWithTwoDimensionArray(arrData);
        this.es6WithTwoDimensionArray(arrData);
    }
}

var testLoopPerforamnces = new TestLoopPerforamnces();
testLoopPerforamnces.measureLoopPerformances();
