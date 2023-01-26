#include "functions_to_implement.cpp"
#include <iostream>
#include <vector>

int main(){
	std::vector<int> v{1,2,3};
	std::vector<int> testCase {1, 5, 10, 12, 8, 9};
	std::vector<bool> results = EvenMask(testCase);
	for(int i = 0; i < results.size(); i++){
		std::cout<<results[i] << " ";
	}
	std::cout<< std::endl;
	std::cout << NthFibonacci(9) << std::endl;
	std:: cout << Sum(v) << std::endl;
}