// @ts-check

import { createIndependentModules } from "eslint-plugin-project-structure";


export const ModuleConfig = createIndependentModules({
	debugMode: true,
	modules: [
		{
			name: "Core",
			allowExternalImports: true,
			pattern: "src/core/**",
			errorMessage: "Core files are not allowed to import anything.",
			allowImportsFrom: ["core/**"]
		},
		{
			name: "Shared Components",
			allowExternalImports: true,
			pattern: "src/components/**",
			errorMessage: "Shared components are not allowed to import anything.",
			allowImportsFrom: [
				"src/core/**",
				"src/components/**",
				"src/lib/**",
				"src/public/**",
				"src/assets/**",

				"src/hooks/**",
				"src/data/**",
				"src/service/**"
			]
		},
		{
			name: "Pages",
			allowExternalImports: true,
			pattern: "src/app/**",
			errorMessage: "Pages are not allowed to import from this location.",
			allowImportsFrom: [
				"src/core/**",
				"src/components/**",
				"src/lib/**",
				"src/public/**",
				"src/assets/**",

				"src/hooks/**",
				"src/data/**",
				"src/service/**",
				"src/theme/**",

				"{family}/**"
			]
		}

		// All files not specified in the rules are not allowed to import anything.
		// Ignore all non-nested files in the `src` folder.
		// {
		// 	name: "Unknown files",
		// 	pattern: [["**", "!src/*"]],
		// 	allowImportsFrom: [],
		// 	allowExternalImports: true,
		// 	errorMessage: "This file is not specified as an independent module in `independentModules.mjs`."
		// }
	]
});