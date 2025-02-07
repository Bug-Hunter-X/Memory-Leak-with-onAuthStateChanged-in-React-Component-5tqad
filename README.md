# Firebase onAuthStateChanged Unsubscribe Issue

This repository demonstrates a common issue with Firebase's `onAuthStateChanged` function in React components: memory leaks due to unhandled subscriptions.  The `authBug.js` file showcases the problematic code, while `authSolution.js` provides a corrected version that prevents memory leaks.

## Problem

The original code fails to unsubscribe from the `onAuthStateChanged` listener when the component unmounts.  This results in the listener continuing to run even after the component is no longer in use, leading to memory leaks, especially in applications with frequent login/logout actions or component rerenders.