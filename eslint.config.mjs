import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

// Função auxiliar para mapear a severidade 'error' (ou 2) para 'warn' (ou 1)
function mapErrorToWarn(ruleConfig) {
	// Se a configuração for simplesmente 'error' ou 2
	if (ruleConfig === "error" || ruleConfig === 2) {
		return "warn"; // Mude para 'warn'
	}
	// Se for um array e o primeiro elemento for 'error' ou 2
	if (
		Array.isArray(ruleConfig) &&
		(ruleConfig[0] === "error" || ruleConfig[0] === 2)
	) {
		// Retorne um novo array com 'warn' como primeiro elemento e o resto das opções
		return ["warn", ...ruleConfig.slice(1)];
	}
	// Caso contrário, mantenha a configuração original ('warn', 'off', 1, 0, ou arrays que não começam com 'error')
	return ruleConfig;
}

// Objeto para armazenar as regras com severidade modificada
const warningRules = {};

// Processa as regras recomendadas do TypeScript ESLint (que é um array de configs)
tseslint.configs.recommended.forEach((config) => {
	if (config.rules) {
		for (const ruleId in config.rules) {
			// Aplica a função para mapear error -> warn e armazena
			warningRules[ruleId] = mapErrorToWarn(config.rules[ruleId]);
		}
	}
});

// Processa as regras recomendadas do React (que é um objeto de config)
if (pluginReact.configs.flat.recommended.rules) {
	for (const ruleId in pluginReact.configs.flat.recommended.rules) {
		// Aplica a função para mapear error -> warn e armazena
		// Sobrescreve se a regra já existir do tseslint (o que é normal)
		warningRules[ruleId] = mapErrorToWarn(
			pluginReact.configs.flat.recommended.rules[ruleId],
		);
	}
}

// Define a configuração final
export default defineConfig([
	// Configuração base de arquivos e globals
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		languageOptions: { globals: globals.browser },
	},

	// Aplica as configurações recomendadas originais
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,

	// Adiciona a configuração de *sobrescrita* por ÚLTIMO
	// Esta configuração aplicará as regras com 'warn' onde antes era 'error'
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], // Aplica aos mesmos arquivos
		rules: warningRules, // Usa o objeto de regras que calculamos
	},
]);
