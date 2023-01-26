#define CATCH_CONFIG_MAIN
#include "catch.hpp"
#include "functions_to_implement.cpp"
#include <vector>

TEST_CASE ( "Fibonacci sequence values are computed", "[fibonacci]"){
    REQUIRE (NthFibonacci(9) == 34);
    REQUIRE (NthFibonacci(1) == 1);
    REQUIRE (NthFibonacci(3) == 2);
    REQUIRE (NthFibonacci(13) == 233);
}

TEST_CASE ( "Adds all values in vector correctly", "[sum]"){
    std::vector <int> test1 ={1, 2, 3};
    std::vector<int> test2 = {-1, -2, -3, -5, 10};
    std::vector<int> test3 = {0, 0,9,8};
    std::vector<int> test4 = {0, 100, 12, 10};
    REQUIRE (Sum(test1) == 6);
    REQUIRE (Sum(test2) == -1);
    REQUIRE (Sum(test3) == 17);
    REQUIRE (Sum(test4) == 122);
}

TEST_CASE ("Check that even and odd numbers are correctly computed", "[evenMask]"){
    std::vector <int> test1 = {1, 5, 10, 8, 17}; // {false, false, true, true, false}
    std::vector <int> test2 = {2, 4, 6, 8, 10}; // all true
    std::vector <int> test3 = {1, 3, 5, 7, 9, 11}; // all false
    std::vector <int> test4 = {2, 4, 10, 7, 103, 12}; //{true, true, true, false, false, true}
    REQUIRE (EvenMask(test1) == std::vector <bool>{false, false, true, true, false});
    REQUIRE (EvenMask(test2) == std::vector <bool>{true, true, true, true, true});
    REQUIRE (EvenMask(test3) == std::vector <bool>{false, false, false, false, false, false});
    REQUIRE (EvenMask(test4) == std::vector <bool>{true, true, true, false, false, true});
}

