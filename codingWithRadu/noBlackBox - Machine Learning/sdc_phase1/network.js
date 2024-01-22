class NeuralNetwork{
  constructor(neuronCounts){
    this.levels=[];
    for(let i=0;i<neuronCounts.length-1;i++){
      this.levels.push(new Level(neuronCounts[i],neuronCounts[i+1]));
    }
  }

  // What we are doing here is basically passing the output of the previous level as the input of the next
  // and then the final output will be the one that tells the car in which direction to go.
  static feedForward(givenInputs,network){
    let outputs=Level.feedForward(givenInputs,network.levels[0]);
    for(let i=1;i<network.levels.length;i++){
      outputs=Level.feedForward(outputs,network.levels[i]);
    }
    return outputs;
  }

  static mutate(network,amount=1){
    network.levels.forEach(level=>{
      for(let i=0;i<level.biases.length;i++){
        level.biases[i]=lerp(
          level.biases[i],
          Math.random()*2-1,
          amount
        );
      }

      for(let i=0;i<level.weights.length;i++){
        for(let j=0;j<level.weights[i].length;j++){
          level.weights[i][j]=lerp(
            level.weights[i][j],
            Math.random()*2-1,
            amount
          );
        }
      }
    });
  }
}

class Level{
  constructor(inputCount,outputCount){
    this.inputs=new Array(inputCount);
    // these inputs are what the sensors will be picking up as our car is driving. We will then calculate the
    // outputs which based on the biases. They will be random here but in our brains and other networks they 
    // would have a much more complex structure. 
    this.outputs=new Array(outputCount);
    this.biases=new Array(outputCount); // Each output nueron has a bias. A value above which it will fire.

    this.weights=[];
    for(let i=0;i<inputCount;i++){
      this.weights[i]=new Array(outputCount);
    }

    Level.#randomize(this);
  }

  // we use a static method here because normal methods don't serialize and Radu wants to serialize
  // this later. A static keyword in JS defines a static mathod or field for a class, or a static initialization
  // block. Static properties cannot be directly accessed on instances of the class. Instead, they are 
  // accessed on the class itself. They are often used as utility functions, such as functions to create or
  // clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data
  // you don't need to be replicated across instances. 
  static #randomize(level){
    for(let i=0;i<level.inputs.length;i++){
      for(let j=0;j<level.outputs.length;j++){
        level.weights[i][j]=Math.random()*2-1;
      }
    }

    for(let i=0;i<level.biases.length;i++){
      level.biases[i]=Math.random()*2-1;
    }
  }

  // we compute the outputs using a 'feedForward' algorithm
  static feedForward(givenInputs,level){
    // first we put all of the given inputs into our level inputs. 
    for(let i=0;i<level.inputs.length;i++){
      level.inputs[i]=givenInputs[i];
    }

    for(let i=0;i<level.outputs.length;i++){
      let sum=0;
      for(let j=0;j<level.inputs.length;j++){
        sum+=level.inputs[j]*level.weights[j][i];
      }
      if(sum>level.biases[i]){
        level.outputs[i]=1; // turning it on based on the biases. 
      }else{
        level.outputs[i]=0; // turning it off 
      }
    }
    // console.log(level.outputs);
    return level.outputs;
  }
}

