import Label from "../Label";
import FieldSelect from "../FieldSelect";
import FieldOption from "../FieldOption";
import { budgets, businessType } from "../../my_data";
const ContactFormBusinessBuget = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 sm:flex-row">
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <Label labelTitle="What type of business are you?" />
        <FieldSelect fieldSelectName="user_businessType">
          {businessType.map((business) => {
            const { id, title, selected } = business;
            return (
              <FieldOption
                key={id}
                fieldOptionTitle={title}
                fieldOptionValue={title}
              />
            );
          })}
        </FieldSelect>
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-1">
        <Label labelTitle="What budget have you got to work with?" />
        <FieldSelect fieldSelectName="user_budget">
          {budgets.map((budget) => {
            const { id, description, selected } = budget;
            return (
              <FieldOption
                key={id}
                fieldOptionValue={description}
                fieldOptionTitle={description}
              />
            );
          })}
        </FieldSelect>
      </div>
    </div>
  );
};
export default ContactFormBusinessBuget;
