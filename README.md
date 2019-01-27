# qs-mobile-app
Mobile app using Standard Qlik Sense Objects for visualizing data

# Installing:
We are using `http-server`for running the Mashup. It is a simple, zero-configuration command-line http server.

Installation via `npm`:

     npm install http-server -g

This will install `http-server` globally so that it may be run from the command line.

**IMPORTANT**
Change qlik sense server host URL. Find in the project `--YOUR QLIK SENSE SERVER HOST--` and add yours. 

## Usage:

     http-server [path] [options]
     
     Example: http-server --cors -a localhost -p 80

`[path]` defaults to `./public` if the folder exists, and `./` otherwise.

*Now you can visit http://localhost to view your Mashup*
