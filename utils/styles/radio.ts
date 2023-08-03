export const radio = `
input[type="radio"] {
  --primary-color: #004170;

  width: 24px;
  opacity: 0;
  position: absolute;
  cursor: pointer;
}
input[type="radio"] + *::before {
  content: "";
  display: inline-block;
  vertical-align: bottom;
  width: 16px;
  height: 16px;
  margin-right: 0.3rem;
  border-radius: 50%;
  border-style: solid;
  border-width: 0.1rem;
  border-color: gray;
}
input[type="radio"]:checked + * {
  color: var(--primary-color);
}
input[type="radio"]:checked + *::before {
  background: radial-gradient(#004170 0%, #004170 40%, transparent 50%, transparent);
  border-color: var(--primary-color);
}
`;
