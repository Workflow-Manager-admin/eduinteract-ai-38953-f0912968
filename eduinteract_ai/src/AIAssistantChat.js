import React from 'react';

/**
 * PUBLIC_INTERFACE
 * AIAssistantChat component.
 * Placeholder integration for AI chat engines (OpenAI/Kavia) and ability to leverage computation APIs (Math.js, Wolfram Alpha).
 */
function AIAssistantChat() {
  return (
    <div>
      {/* This component will host an AI chat interface for student Q&A */}
    </div>
  );
}

// =================== API INTEGRATION HOOKS & FUNCTIONS =======================

// ---- OpenAI/Kavia AI Completion API ----
/**
 * PUBLIC_INTERFACE
 * Sends a message to OpenAI/Kavia AI for a response.
 * Example usage:
 *    const reply = await getAICompletion("What is photosynthesis?");
 * Endpoint docs: (OpenAI) https://platform.openai.com/docs/api-reference/chat/create
 */
export async function getAICompletion(message) {
  // For OpenAI's gpt-3.5-turbo, POST https://api.openai.com/v1/chat/completions
  // Example POST body: { model: "gpt-3.5-turbo", messages: [{role: "user", content: message}] }
  // Headers: Authorization: Bearer <API_KEY>
  // TODO: Plug in real endpoint (could be OpenAI or Kavia AI server), insert credentials, handle errors
  const apiKey = 'YOUR_OPENAI_API_KEY'; // TODO
  // const response = await fetch('https://api.openai.com/v1/chat/completions', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${apiKey}`
  //   },
  //   body: JSON.stringify({
  //     model: "gpt-3.5-turbo",
  //     messages: [{role: "user", content: message}]
  //   })
  // });
  // const json = await response.json();
  // return json.choices[0].message.content;
  return '[TODO: Live AI completion response]';
}

/**
 * Example extension:
 * Show how the assistant can "route" math questions to Math.js or Wolfram Alpha for computation/validation, or reply with their results for math queries.
 * See evaluateMathExpression(), queryWolframAlpha() in other modules.
 */

export default AIAssistantChat;
