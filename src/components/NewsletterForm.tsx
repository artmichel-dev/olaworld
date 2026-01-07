"use client";

import { useState, FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

interface NewsletterFormProps {
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
}

const NewsletterForm = ({
  className = "",
  inputClassName = "",
  buttonClassName = "",
}: NewsletterFormProps) => {
  const t = useTranslations("newsletter");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success(t("successMessage"));
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col md:flex-row md:flex-nowrap items-stretch gap-4 ${className}`}
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t("placeholder")}
        required
        className={`font-sans w-full md:min-w-72 min-h-full bg-transparent border-0 border-b-2 border-foreground text-foreground placeholder:text-foreground uppercase focus:outline-none focus:border-foreground pb-1 ${inputClassName}`}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`btn-transparent font-sans whitespace-nowrap disabled:opacity-50 flex flex-row items-center justify-center ${buttonClassName}`}
      >
        {isSubmitting ? t("submitting") : t("button")}
        {!isSubmitting && <ArrowRight className="w-4 h-4" />}
      </button>
    </form>
  );
};

export default NewsletterForm;
