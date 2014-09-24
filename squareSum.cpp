#include <iostream>

using namespace std;

int main(){
	float hoursSlept[] = {2.3, 2.6, 2.8, 3.1, 3.4, 3.5, 3.7, 3.9, 4.1, 4.2, 4.4, 4.4, 4.8, 4.9, 5.1, 5.1, 5.3, 5.3, 
		5.5, 5.6, 5.6, 5.6, 5.8, 5.9, 5.9, 6.2, 6.5, 6.6, 6.9, 7.3, 7.6, 7.7, 8.1, 8.6, 9.2, 9.5, 10.1};

	float sum = 0;
	for(int i = 0; i < 39; i++){
		sum += pow(hoursSlept[i], 2);
	}

	cout<< sum;
}