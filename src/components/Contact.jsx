import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Contact() {
  const [successMessage, setSuccessMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      side: "",
      fullName: "",
      coming: "",
    },
    validationSchema: Yup.object({
      side: Yup.string().required("Խնդրում ենք ընտրել տարբերակ"),
      fullName: Yup.string().required("Անուն Ազգանունը պարտադիր է"),
      coming: Yup.string().required("Խնդրում ենք նշել մասնակցությունը"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
           const token = "8049463628:AAEwTrWZAUUXHfvJ8o3DWnPQET2X9olpDqY";
           const chatId = "5904572264";

        const message = `
💍 Նոր հարսանեկան պատասխան

👤 Անուն՝ ${values.fullName}
✅ Մասնակցություն՝ ${
          values.coming === "yes" ? "Կգամ հաճույքով" : "Ցավոք չեմ կարող գալ"
        }
👥 Հրավիրել է ՝  ${values.side === "bride" ? "Հարսնացուն" : "Փեսացուն"}
        `;

        await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
          }),
        });

        // Reset form after sending
        resetForm();

        // Show success message
        setSuccessMessage("Ձեր պատասխանն ուղարկվեց հաջողությամբ 🎉");

        // Hide message after 5 seconds
        setTimeout(() => setSuccessMessage(""), 5000);
      } catch (error) {
        console.error(error);
        setSuccessMessage("Նամակը ուղարկելու ընթացքում խնդիր առաջացավ ❌");
        setTimeout(() => setSuccessMessage(""), 5000);
      }
    },
  });

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-center text-2xl font-semibold mb-10">
        Խնդրում ենք հաստատել Ձեր ներկայությունը մինչև
        <br />
        <span className="font-bold">27.01.2026</span>
      </h1>

      <form onSubmit={formik.handleSubmit} className="space-y-10">
        {/* Որ կողմի հյուր եք */}
        <div>
          <p className="font-medium mb-3">Ձեզ հրավիրել է</p>
          <div className="flex flex-col gap-4">
            {[
              { label: "Հարսի կողմ", value: "bride" },
              { label: "Փեսայի կողմ", value: "groom" },
            ].map((item) => (
              <label
                key={item.value}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name="side"
                  value={item.value}
                  onChange={formik.handleChange}
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                    ${
                      formik.values.side === item.value
                        ? "border-black"
                        : "border-gray-400"
                    }`}
                >
                  {formik.values.side === item.value && (
                    <span className="w-2.5 h-2.5 rounded-full bg-black" />
                  )}
                </span>
                <span className="text-md text-gray-700 font-semibold">
                  {item.label}
                </span>
              </label>
            ))}
          </div>
          {formik.touched.side && formik.errors.side && (
            <p className="text-red-500 text-sm mt-2">{formik.errors.side}</p>
          )}
        </div>

        {/* Անուն Ազգանուն */}
        <div>
          <input
            type="text"
            name="fullName"
            placeholder="Անուն Ազգանուն"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
            className="w-full border-b border-black outline-none py-2"
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <p className="text-red-500 text-sm mt-2">
              {formik.errors.fullName}
            </p>
          )}
        </div>

        {/* Մասնակցություն */}
        <div>
          <p className="font-medium mb-3">Կմասնակցե՞ք</p>
          <div className="flex flex-col gap-4">
            {[
              { label: "Կգամ հաճույքով", value: "yes" },
              { label: "Ցավոք չեմ կարող գալ 😢", value: "no" },
            ].map((item) => (
              <label
                key={item.value}
                className="flex items-center gap-3 cursor-pointer"
              >
                <input
                  type="radio"
                  name="coming"
                  value={item.value}
                  onChange={formik.handleChange}
                  className="hidden"
                />
                <span
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center
                    ${
                      formik.values.coming === item.value
                        ? "border-black"
                        : "border-gray-400"
                    }`}
                >
                  {formik.values.coming === item.value && (
                    <span className="w-2.5 h-2.5 rounded-full bg-black" />
                  )}
                </span>
                <span className="text-md text-gray-700 font-semibold">
                  {item.label}
                </span>
              </label>
            ))}
          </div>
          {formik.touched.coming && formik.errors.coming && (
            <p className="text-red-500 text-sm mt-2">{formik.errors.coming}</p>
          )}
        </div>

        {/* Submit */}
        <div className="flex flex-col items-center pt-6">
          <button
            type="submit"
            className="px-12 py-3 rounded-full border border-black
                       hover:bg-black hover:text-white transition"
          >
            Ուղարկել
          </button>

          {/* Success message */}
          {successMessage && (
            <p className="text-green-600 text-center mt-4">{successMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Contact;
