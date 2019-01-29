export const javaQuestions = [
  {
    q: "Explain JDK, JRE and JVM? ",
    a: {
      jvm: {
        a: `JVM (Java Virtual Machine) is an abstract machine.
            It is called a virtual machine which provides runtime 
            environment in which Java bytecode can be executed`,
        b: "JVM, JRE, and JDK are platform dependent because the configuration of each OS is different from each other",
        c: `The JVM performs the following main tasks:
            \nLoads code
            \nVerifies code
            \nExecutes code
            \nProvides runtime environment
      `},
      jdk: {
        a: `JDK stands for Java Development Kit.`,
        b: ` is a software development environment which is used to develop Java applications `,
        c: `It contains JRE + development tools`,
        d: 'The JDK contains a private Java Virtual Machine (JVM) and a few other resources such as an interpreter/loader (java), a compiler  etc. to complete the development of a Java Application'
      },
      jre: {
        a: `JRE stands for Java Runtime Environment`,
        b: `The Java Runtime Environment is a set of software tools which are used for developing Java applications`,
        c: `It is used to provide the runtime environment`,
        d: `It is the implementation of JVM. It contains a set of libraries + other files that JVM uses at runtime.`
      }
    },
    link: "https://www.javatpoint.com/difference-between-jdk-jre-and-jvm"
  },
  {
    q: "Explain public static void main(String args[]).",
    a: {
      public: {a: "Public is an access modifier, Public means that this Method will be accessible by any Class."},
      static: {a: "It is a keyword in java which identifies it is class based i.e it can be accessed without creating the instance of a Class."},
      void: {a: "t is the return type of the method. Void defines the method which will not return any value"},
      main: {a: "t is the name of the method which is searched by JVM as a starting point for an application with a particular signature only. It is the method where the main execution occurs."},
      String_args: {a: "String args[] : It is the parameter passed to the main method."}
    },
    link: "https://javabeginnerstutorial.com/core-java-tutorial/public-static-void-mainstring-args-explanation/"
  }

]