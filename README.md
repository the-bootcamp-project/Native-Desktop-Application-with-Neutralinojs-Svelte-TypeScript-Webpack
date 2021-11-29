<!--
Copyright (c) 2021 Bootcamp-Project contributors <contributors@bootcamp-project.com>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->
<a href="https://bootcamp-project.com/" target="_blank"><img src="https://bootcamp-project.com/tbcp.svg" align="right" height="200" /></a>

# How to Build and Publish Modern Native Desktop Application

## with Svelte TailwindCSS TypeScript and Webpack

<img src="https://img.shields.io/badge/License-AGPL%20v.3-lightgrey?style=for-the-badge" />
<img src="https://img.shields.io/badge/Bootcamp-Project-blue?style=for-the-badge" />

## 🦄 About 🦄

> Description

**Project Links**

- [Homepage][Repo_Homepage]
- [Repository][Repo_URL]
- [Documentation][Repo_Docs]
- [Issues][Repo_Issues]

**Minimum Viable Product**: *What is what we want?*

- **What are the goals?**
  - [X] Modern Web techniques
    - [X] TypeScript Support
    - [X] Svelte Components
      - [X] Storybook UI Testing and Presentation
    - [X] TailwindCSS Styling
    - [X] with Webpack bundeling
  - [X] Smart reload Development
  - [X] a Static Application Security Code Analyzing
    - [X] with ESLint (eslint-plugin-security)
  - [X] A Test Driven Development approche
    - [X] with Jest
  - [X] Automation (CI/CD)
    - [X] Linting / Prettier
    - [X] Testing
    - [X] Building / Packaging
    - [ ] Deployment / Publishing
  - [X] a on Board Documentation for our Users
- **Sense** *(Why do these goals exist?)*
  - [ ] Explanation #1
  - [ ] Explanation #2
  - [ ] Explanation #3
- **Purpose** *(What should be done with it?)*
  - [ ] Use Case #1
  - [ ] Use Case #2
  - [ ] Use Case #3

## 🚀 Getting Started 🚀

_For more examples, please refer to the [Documentation][Repo_Docs]_

### ✋ Prerequisites ✋

Ensure you have

- [Node.js][Prereq_Nodejs] 12 or later and
- [Yarn][Prereq_Yarn] v2 installed

and, install other global dependencies

```bash
sudo npm install -g yarn
```

**Get the Boilerplate**

> *Boilerplate for new projects only, as a contributor please scroll down to: 🤝 Contribute 🤝*

```bash
git clone --depth 1 --branch main https://gitlab.com/the-bootcamp-project/frameworks/native-desktop.git hello_desktop
```

**Change directory**

```bash
cd hello_desktop
```

**Remove the old repository and create a new one**

```bash
rm -rf .git && git init .
```

**Now it's your's!**

### 💪 Installation 💪

Run the following:

- `yarn install` to install dependencies.
- `yarn run git:sub:merge` *(starts automatic after `yarn install`)* to update necessary git submodules

*if you want to use npm, replace `yarn ...` with `npm ...`*

See [Installation Documentation][Repo_Install_Docs]

### 😏 Development 😏

Run the following:

- `yarn run dev` to start the development server

*if you want to use npm, replace `yarn ...` with `npm ...`*

See [Development Documentation][Repo_Develop_Docs]

### 🤓 Linting 🤓

Run the following:

- `yarn run format` to prettier the source-code
- `yarn run lint` to start read-only linting from js, ts and svelte files.
- `yarn run lint:svelte` to start linting for Svelte Components
- `yarn run lint:fix` to start read-write linting, see above and fix warnings/errors.

*if you want to use npm, replace `yarn ...` with `npm ...`*

See [Linting Documentation][Repo_Linting_Docs]

### 🧐 Testing 🧐

Run the following:

- `yarn run test:smoke` to start a local HTTP-Server to preview the build
- `yarn run test:coverage` to start unit-testing and show coverage stets
- `yarn run test:unit` to start unit-testing

*if you want to use npm, replace `yarn ...` with `npm ...`*

See [Testing Documentation][Repo_Testing_Docs]

### 🤩 Building 🤩

Run the following:

- `yarn run build:stats` *(runs linting and fix first)* to start building, create build-profile and shown bundling states
- `yarn run build` *(runs linting and fix first)* to start building

*if you want to use npm, replace `yarn ...` with `npm ...`*

See [Building Documentation][Repo_Building_Docs]

### 🥳 Publishing 🥳

Then run the following:

- `yarn run publish` *(creates `./public`)* copy content from `./build` to `./public` - *GitLab Pages Example*

*if you want to use npm, replace `yarn ...` with `npm ...`*

See [Publishing Documentation][Repo_Publishing_Docs]

## ⭐️ Features ⭐️

- **Browser / Node.js** and **TypeScript** support by default
- **Test-Diven Development** and **Unit-Tests** by default
- **Best pratice and security-first Linting and Prettier** by default
- [**Security-first production ready configuration**][TBCP_Configurations] by default
- **Automatic CI/CD Pipeline** for **GitLab** by default
- [Extensive configuration **documentation**][Repo_Docs]

### 😎 Built With 😎

<table>
<tr>
<td><a href="https://www.electronjs.org/" target="_blank"><img src="https://cdr.bootcamp-project.com/logos/programming/electron.svg" alt="Electron" width="200"/></a></td>
<td><a href="https://typescriptlang.org/" target="_blank"><img src="https://cdr.bootcamp-project.com/logos/programming/typescript.svg" alt="TypeScript" width="200"/></a></td>
<td><a href="https://eslint.org/" target="_blank"><img src="https://cdr.bootcamp-project.com/logos/programming/eslint.svg" alt="eslint" width="200"/></a></td>
<td><a href="https://prettier.io/" target="_blank"><img src="https://cdr.bootcamp-project.com/logos/programming/prettier.svg" alt="prettier" width="200"/></a></td>
<td><a href="https://jestjs.io/" target="_blank"><img src="https://cdr.bootcamp-project.com/logos/programming/jest.svg" alt="jest" width="200"/></a></td>
<td><a href="https://svelte.dev/" target="_blank"><img src="https://cdr.bootcamp-project.com/logos/programming/svelte.svg" alt="Svelte" width="200"/></a></td>
<td><a href="https://tailwindcss.com/" target="_blank"><img src="https://cdr.bootcamp-project.com/logos/programming/tailwindcss.svg" alt="Tailwind CSS" width="200"/></a></td>
<td><a href="https://webpack.js.org/" target="_blank"><img src="https://cdr.bootcamp-project.com/logos/programming/webpack.svg" alt="Webpack" width="200"/></a></td>
<td><a href="https://bootcamp-project.com/" target="_blank"><img src="https://bootcamp-project.com/tbcp.svg" alt="tbcp" width="200"/></a></td>
</tr>
</table>

## 📑 Changelog 📑

See [CHANGELOG](CHANGELOG) for more information.

## 😅 Support 😅

*Don't be shy!* You are also welcome to open a [post in the issue registar][Repo_Issues] for simple questions.

## 📋 Roadmap 📋

- **auto-versioning**
- **auto-changelogging**

See the [open issues][Repo_Issues] for a list of proposed features (and known issues).

## 🤝 Contribute 🤝

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

Please read the [contribution guidelines][TBCP_Contribution] first.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🏆 Acknowledgements 🏆

Thanks for these awesome resources that were used during the development of the **Bootcamp: Modern Native Desktop Application Framework**:

- [RTFM.page - TypeScript](https://dev.rtfm.page/#/working_with/javascript/typescript)
- [RTFM.page - Svelte](https://dev.rtfm.page/#/working_with/javascript/svelte)
- [RTFM.page - Tailwind CSS](https://dev.rtfm.page/#/working_with/javascript/tailwindcss)
- [RTFM.page - ESLint](https://dev.rtfm.page/#/working_with/javascript/eslint)
- [RTFM.page - Jest](https://dev.rtfm.page/#/working_with/javascript/jest)
- [RTFM.page - WebPack](https://dev.rtfm.page/#/working_with/javascript/webpack)

## 📜 License 📜

See [LICENSE](LICENSE) for more information.

## 💌 Contact 💌

[Bootcamp contributors][TBCP_Homepage] - `contributors` @ `bootcamp-project` .com

<!-- ---------------------------------------------------------------------------------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------------------------------------------------------------------- -->
<!-- ---------------------------------------------------------------------------------------------------------------------------------- -->

[Repo_Homepage]: https://frameworks.bootcamp-project.com/#/native_desktop/index
[Repo_URL]: https://gitlab.com/the-bootcamp-project/frameworks/native-desktop
[Repo_Docs]: https://frameworks.bootcamp-project.com
[Repo_Install_Docs]: https://frameworks.bootcamp-project.com/#/native_desktop/install
[Repo_Develop_Docs]: https://frameworks.bootcamp-project.com/#/native_desktop/develop
[Repo_Linting_Docs]: https://frameworks.bootcamp-project.com/#/native_desktop/linting
[Repo_Testing_Docs]: https://frameworks.bootcamp-project.com/#/native_desktop/testing
[Repo_Building_Docs]: https://frameworks.bootcamp-project.com/#/native_desktop/building
[Repo_Publishing_Docs]: https://frameworks.bootcamp-project.com/#/native_desktop/publishing
[Repo_Issues]: https://gitlab.com/the-bootcamp-project/frameworks/native-desktop/-/issues
[TBCP_Configurations]: https://configurations.bootcamp-project.com
[TBCP_Contribution]: https://bootcamp-project.com/#code_of_conduct
[TBCP_Homepage]: https://bootcamp-project.com
[Prereq_Nodejs]: https://nodejs.org
[Prereq_Yarn]: https://yarnpkg.com
