#include <emscripten.h>
#include <iostream>

using namespace std;

int main (int argc, char **argv) {
  int x = 100;
  int y = EM_ASM_({
    console.log("This value is from C++: ", $0);
    return 10;
  }, x);
  cout << y << endl;
  return 0;
}
