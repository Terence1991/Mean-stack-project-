// node myFile.js

const pendingTimers = [];
const pendingOstasks = []
const pendingOperations = []


// new timers and tasks are recorded by  my file running
myFile.runConents('')

function shouldContinue() {
  // check one: any peding setTimeOut setInterval setImidiate
 // check two: any pending operating tasks: Like a server running on a port
 // check three: any pending  long  running operations ( like fs module)

 return pendingTimers.length || pendingOperations.length || pendingOstasks.length

}



//entire body executes in one tick
while(shouldContinue()) {
// node looks at pending timers and sees if any functions are ready to be called
//node look at pending os tasdks and operation and calls relevant  callback
//pause execution..only continue 
// a new pending OS task is done 
// new pending operation is dont 
// a timer is about to complete 
// look at pending timers// call any setImidiate
// hnadle any close events 
}







//exit back to terminal