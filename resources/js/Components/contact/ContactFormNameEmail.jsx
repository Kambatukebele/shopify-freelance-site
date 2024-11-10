import Label from "../Label";
import FieldInput from "../FieldInput";
const ContactFormNameEmail = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 sm:flex-row">
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <Label labelTitle="Name" />
        <FieldInput
          fieldInputName="user_name"
          fieldInputPlaceholder="First name"
          fieldInputType="text"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <Label labelTitle="Email" />
        <FieldInput
          fieldInputName="user_email"
          fieldInputPlaceholder="Email"
          fieldInputType="email"
        />
      </div>
    </div>
  );
};
export default ContactFormNameEmail;
