import * as shell from "shelljs";
//Copy all the view Templates
shell.cp("-R","src/views","dist/src/");

//Copy all the public content
shell.cp("-R","src/public","dist/src/");

