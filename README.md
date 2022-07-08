# Informa framework for web test automation

---

## Set up a new project

1. Initialize npm package with `npm init`
2. Install framework with `npm install ssh+git://git@github.com:informa-pharma/informa_framework.git`
3. Create [project structure](#project-structure)

## Update framework

1. Uninstall framework with `npm uninstall informa_framework`
2. Install framework with `npm install ssh+git://git@github.com:informa-pharma/informa_framework.git`

## Project structure

| Folder               | Description                                             |
| -------------------- | ------------------------------------------------------- |
| /configs             | Configs for different browsers                          |
| /configs/environment | Environment configuration                               |
| /reports             | Reports generated after test run                        |
| /temp                | Temporary folder for miscellaneous files                |
| /src/forms           | Forms with elements and methods that interact with them |
| /src/testData        | Static test data for tests                              |
| /src/test/features   | Cucumber feature files with step definitions            |
| /src/test/steps      | Implementations of steps from feature files             |

---

## TODO:

- [x] Add wdio dependency
- [x] Try sample tests
- [x] Separate project related configuration from framework
- [x] Turn project to npm package
- [x] Add new branch on Citeline with framework
- [x] Remove redundant dependencies from `package.json`
- [x] Prepare script to update package in project
- [ ] Finish framework readme
- [x] Full run in TeamCity (Citeline)
- [ ] Demo with team
- [ ] Migration to TypeScript
