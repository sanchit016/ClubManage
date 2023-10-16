import React from "react";
export function AlertWarning() {
  return (
    <>
      <div class="alert alert-warning" role="alert">
        A simple warning alert—check it out!
      </div>
    </>
  );
}

export function AlertSuccess() {
  return (
    <>
      <div class="alert alert-success" role="alert">
        A simple success alert—check it out!
      </div>
    </>
  );
}

export function AlertDanger({ text }) {
  return (
    <>
      <div class="alert alert-danger" role="alert">
        {text}
      </div>
    </>
  );
}

export function AlertPrimary() {
  return (
    <>
      <div class="alert alert-primary" role="alert">
        A simple warning alert—check it out!
      </div>
    </>
  );
}
