class KeyReplacementPlugin {
    constructor(API, name, config) {
        this.API = API;
        this.name = name;
        this.config = config;

        // Ensure 'rules' is an array
        if (!Array.isArray(this.config.rules)) {
            this.config.rules = [];
            this.saveConfig();
        }
    }

    // Register the 'htmlOutput' modifier
    addModifiers() {
        this.API.addModifier('htmlOutput', this.replaceKeysInContent, 1, this);
    }

    /**
     * Replace keys in the HTML content with their corresponding replacements.
     * @param {string} htmlCode - The HTML content of the page/post.
     * @param {object} globalContext - Additional context if needed.
     * @param {object} context - Specific context of the rendering process.
     * @returns {string} - Modified HTML content.
     */
    replaceKeysInContent(renderer, htmlCode, globalContext, context) {
        // Ensure htmlCode is a string
        if (typeof htmlCode !== 'string') {
            console.error('htmlCode is not a string:', htmlCode);
            return htmlCode; // Return original content if not a string
        }

        console.log('==================================================================')

        let modifiedHtml = htmlCode;

        // Iterate over each replacement rule
        this.config.rules.forEach(rule => {
            if (rule.key && rule.replacement) {
                // Convert replacement to string to avoid type issues
                const replacement = String(rule.replacement);

                // Escape regex special characters in key
                const escapedKey = this.escapeRegExp(rule.key);

                // Log the replacement for debugging
                console.log(`Replacing [${rule.key}] with ${replacement}`);

                // Regex to find <p>[Key]</p> possibly with spaces
                const regexWithPTags = new RegExp(`<p>\\s*${escapedKey}\\s*<\\/p>`, 'g');

                // Replace <p>[Key]</p> with replacement
                modifiedHtml = modifiedHtml.replace(regexWithPTags, replacement);

                // Regex to find [Key] not within <p> tags
                const regexKey = new RegExp(`${escapedKey}`, 'g');

                // Replace [Key] with replacement
                modifiedHtml = modifiedHtml.replace(regexKey, replacement);
            } else {
                console.warn('Invalid rule detected:', rule);
            }
        });

        // Log the modified HTML for debugging
        console.log('Modified HTML:', modifiedHtml);

        return modifiedHtml;
    }

    /**
     * Utility function to escape special characters in a string for use in a RegExp.
     * @param {string} string - The string to escape.
     * @returns {string} - Escaped string.
     */
    escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // Save updated configuration
    saveConfig() {
        this.API.saveConfig(this.config);
    }
}

// Export the plugin class
module.exports = KeyReplacementPlugin;
