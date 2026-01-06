export default function PasswordChecklist({ password }) {
  const rules = [
    { label: "At least 8 characters", test: password.length >= 8 },
    { label: "One uppercase letter", test: /[A-Z]/.test(password) },
    { label: "One lowercase letter", test: /[a-z]/.test(password) },
    { label: "One number", test: /[0-9]/.test(password) },
    { label: "One special character", test: /[!@#$%^&*]/.test(password) },
  ];

  return (
    <div className="mt-2 text-sm">
      {rules.map((rule, index) => (
        <p
          key={index}
          className={rule.test ? "text-green-600" : "text-red-500"}
        >
          {rule.test ? "✔" : "✖"} {rule.label}
        </p>
      ))}
    </div>
  );
}
