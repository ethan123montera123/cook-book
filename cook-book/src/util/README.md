## Utilities

The Utilities folder contains reusable helper functions, constants, and other non-UI-specific logic that can be used across the entire application. These utilities are designed to promote DRY (Don't Repeat Yourself) code principles.

## Common Utilities

Some examples of utilities that might be included in this directory are:

- **Validation Utilities:** Functions to validate input data, such as emails, phone numbers, or passwords.
- **Date Utilities:** Functions to handle date formatting and manipulation.
- **String Utilities:** Helper functions to manipulate strings (e.g., capitalizing, trimming).
- **Math Utilities:** Functions to handle math operations, such as rounding or calculating percentages.

## Example Utility

Here is an example of a utility function that validates email addresses:

```js
// utilities/validation.js

/**
 * Validates an email address format.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns true if the email is valid, false otherwise.
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

```
