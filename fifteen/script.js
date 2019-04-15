const config = {
    container: "#OrganiseChart1",
    rootOrientation:  'NORTH', // NORTH || EAST || WEST || SOUTH
    // levelSeparation: 30,
    siblingSeparation:   20,
    subTeeSeparation:    60,
    scrollbar: "fancy",
    
    connectors: {
        type: 'step'
    },
    node: {
        HTMLclass: 'nodeExample1'
    }
}

chart_config = [];

// Условия задачи
var source = [
    [2,  1,  6],
    [4, '-', 8],
    [7,  5,  3]
  ];
  
  var target = [
    [1,  2,  3],
    [8, '-', 4],
    [7,  6,  5]
  ];


  StateMatrixs = {'States':[[]]};

  class State {
    constructor(matrix) {
        this.matrix = matrix;
        //this.level = level;
    }

    get g() {
      var countDiff=0;
      for(var i=0; i<this.matrix.length; i++){
          for(var j=0; j<this.matrix[i].length; j++){
              if(this.matrix[i][j] != target[i][j]){
                  countDiff += 1;
              }
          }
      }
      return countDiff;
    }

    drawMatrix(){
        var matrixTable = document.createElement('table');
        matrixTable.setAttribute('border','1');
        for(var i=0; i<this.matrix.length; i++){
            var tr = document.createElement('tr');  
          for(var j=0; j<this.matrix[i].length; j++){
              var td = document.createElement('td');
              var text = document.createTextNode(this.matrix[i][j]);
              td.appendChild(text);
              tr.appendChild(td);
              matrixTable.appendChild(tr);
          }
      }

      var trParams = document.createElement('tr');
      var tdG = document.createElement('td');
      var textG = document.createTextNode(`g=${this.g}`);
      tdG.appendChild(textG);
      trParams.appendChild(tdG);
      matrixTable.appendChild(trParams);


      //$('div::nth-child(0)').append(matrixTable);
      document.body.appendChild(matrixTable);
      //document.getElementById(`level_${this.level}`).appendChild(matrixTable);
      //$('table').append(`<tr><td>g=${this.g}</td><td>f=${this.g - 1}</td></tr>`)
    }

    permutationMatrix(){
        function searchElemInMatrix(inputArray, searchValue) {
          for (var i = 0; i < inputArray.length; i++) {
              var j = inputArray[i].indexOf(searchValue);
              if (j >= 0) {
                  return [i, j];
              };
          };
          return null;
      };

        var currentPosition = searchElemInMatrix(this.matrix, '-');

        var ways = [
            [currentPosition[0]-1, currentPosition[1]],
            [currentPosition[0], currentPosition[1]+1],
            [currentPosition[0]+1, currentPosition[1]],
            [currentPosition[0], currentPosition[1]-1]
        ];

        console.log(ways);


        for(var k=0; k<ways.length; k++){
            var newMatrix = this.matrix.map(function(arr) {
              return arr.slice();
          });
            try{
                var currentValue = this.matrix[ways[k][0]][ways[k][1]];

                if(currentValue != undefined){
                console.log(currentValue);
            
                
                newMatrix[currentPosition[0]][currentPosition[1]] = currentValue;
                newMatrix[ways[k][0]][ways[k][1]] = '-';
                StateMatrixs.States[0].push(newMatrix);
                }
                
            } catch(e){
                console.log('undefined');
            }


        }
        //return currentPosition[1];
        
    }
  }
  //$('body').append('<div id="level_1"></div>');
  let state = new State(source);
  //state.drawMatrix();
  state.permutationMatrix();

  console.log(StateMatrixs);


//   for(var i=0; i<StateMatrixs.States[0].length; i++){
//       let state = new State(StateMatrixs.States[0][i]);
//       //state.drawMatrix();
//       state.permutationMatrix();

//       if(state.g == 0){
//           break;
//       }

//   }



  console.log(StateMatrixs);