import { getDefaultFromField } from "../helpers.js";
import type { PostmarkEmailProvider, EmailSender } from "../types.js";

export function initPostmarkEmailSender(
  config: PostmarkEmailProvider
): EmailSender {
  const defaultFromField = getDefaultFromField();

  return {
    async send(email) {
      const fromField = email.from || defaultFromField;

      return fetch("https://api.postmarkapp.com/email", {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "X-Postmark-Server-Token": config.serverToken,
        },
        method: "POST",
        body: JSON.stringify({
          "From": fromField.email,
          "To": email.to,
          "Subject": email.subject,
          "HtmlBody": email.html,
          "MessageStream": "outbound"
        })
      })
    },
  };
}
