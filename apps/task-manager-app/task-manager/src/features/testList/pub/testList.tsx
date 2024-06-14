import { Calendar, Form } from "@shared/ui"


export const TestList = () => {
    const [form] = Form.useForm()
    form.isFieldsTouched();
    return <Calendar fullscreen/>
};
