import Label from "../Label";
import ContactFormBusinessBuget from "./ContactFormBusinessBuget";
import ContactFormNameEmail from "./ContactFormNameEmail";
const ContactFormInputs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-4">
      <ContactFormNameEmail />
      <ContactFormBusinessBuget />
      <div className="w-full flex flex-col justify-center items-start gap-1 ">
        <Label
          labelHtmlFor="message"
          labelTitle="Describe your project or request"
        />
        <div className="border border-purple50 rounded-2xl w-full">
          <textarea name="message" className="w-full" rows="7"></textarea>
        </div>
      </div>
      <div className="">
        <button
          type="submit"
          className="bg-purple900 text-white h-14 w-36 flex justify-center items-center gap-3 py-2 px-4 rounded-full mt-0 hover:bg-blue hover:shadow-2xl hover:shadow-blue hover:-mt-2 duration-200 ease-in-out"
        >
          Send
        </button>
      </div>
    </div>
  );
};
export default ContactFormInputs;
