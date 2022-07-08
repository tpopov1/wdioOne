@test_01
Feature: Searching needed game

    Feature Description: Searching needed game

Scenario Outline: Searching needed game

Given the user is on the main page
When the user search '<game>' game
Then the foundForm appears

Examples:
    | game        |
    | The Witcher |
    | Fallout     |