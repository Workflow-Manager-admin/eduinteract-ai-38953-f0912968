import React from 'react';

/**
 * PUBLIC_INTERFACE
 * InteractiveModels component.
 * Placeholder integration points for PhET Interactive Simulations, Math.js, and Wolfram Alpha APIs.
 */
function InteractiveModels() {
  return (
    <div>
      {/* This component will allow users to load and interact with educational models/simulations */}
    </div>
  );
}

// =================== API INTEGRATION HOOKS & FUNCTIONS =======================

// ---- PHET Interactive Simulations ----
/**
 * PUBLIC_INTERFACE
 * Loads an interactive PhET simulation using an embed URL or integration API.
 * Example:
 *    const simUrl = 'https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_en.html';
 *    // TODO: In the real component, embed this simUrl in an <iframe>.
 */
export function getPhETSimulationUrl(simName) {
  // Integration: https://phet.colorado.edu/en/simulations/category/html
  // simName example: 'projectile-motion'
  // TODO: Query PhET API or static list for available sims
  return `https://phet.colorado.edu/sims/html/${simName}/latest/${simName}_en.html`;
}

// ---- Math.js API ----
/**
 * PUBLIC_INTERFACE
 * Calls Math.js public API for mathematical evaluation.
 * Docs: https://api.mathjs.org/
 * Example usage:
 *    const result = await evaluateMathExpression("2 * (3 + 4)");
 */
export async function evaluateMathExpression(expression) {
  // Endpoint: GET https://api.mathjs.org/v4/?expr=2*(3%2B4)
  // NOTE: Proper URL escaping is required for mathematical expressions.
  // TODO: Handle errors and return computation result
  const url = `https://api.mathjs.org/v4/?expr=${encodeURIComponent(expression)}`;
  // Live call disabled for placeholder
  // const response = await fetch(url);
  // const result = await response.text();
  // return result;
  return '[TODO: Live math.js result]';
}

// ---- Wolfram Alpha API ----
/**
 * PUBLIC_INTERFACE
 * Queries Wolfram Alpha short answer API (requires AppID).
 * Docs: https://products.wolframalpha.com/short-answers-api/documentation/
 * Example usage:
 *    const answer = await queryWolframAlpha("integrate x^2");
 */
export async function queryWolframAlpha(query) {
  // Endpoint: https://api.wolframalpha.com/v1/result?i=integrate+x^2&appid=YOUR_APP_ID
  // TODO: Replace 'YOUR_APP_ID' with real credential
  // TODO: Handle authentication, errors, query encoding, rate limits, and results
  const appId = 'YOUR_APP_ID'; // TODO
  const url = `https://api.wolframalpha.com/v1/result?i=${encodeURIComponent(query)}&appid=${appId}`;
  // const response = await fetch(url);
  // const result = await response.text();
  // return result;
  return '[TODO: Live Wolfram Alpha result]';
}

export default InteractiveModels;
