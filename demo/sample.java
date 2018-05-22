import java.io.*;
import java.util.*;

/** Causes a compilation error due to an unhandled Exception
 */
public abstract class KeyboardReaderError throws Exception {

  public static void main (String[] args, String test, Map<String,String> bla) { // throws java.io.IOException

    final String s1;
    String s2;

    double num1, num2, product;

    // set up the buffered reader to read from the keyboard
    BufferedReader br = new BufferedReader (new InputStreamReader (System.in));

    System.out.println("Enter a line of input");

    /* Following line triggers the error.  Error will show the type of
       unhandled exception and where the call occurs */
    s1 = br.readLine();

    System.out.println ("The line has " + s1.length() + " characters");

    System.out.println ();
    System.out.println ("Breaking the line into tokens we get:");

    int numTokens = 0;
    StringTokenizer st = new StringTokenizer (s1);

    for(int test = 0; test < 5; test++){
      // do something
    }

    do{
      // do something
    }while(true);

    while (st.hasMoreTokens()) {
      s2 = st.nextToken();
      numTokens++;
      System.out.println ("    Token " + numTokens + " is: " + s2);
    }
  }

  private void testMethod() {
    // do something
  }

}

public interface Test {
  public setTest(String value);
}
