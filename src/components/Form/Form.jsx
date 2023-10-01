import { useFormik } from 'formik';
import * as yup from 'yup';

const Form = () => {
  const registerUser = () => {
    alert(formik.values.name);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      name: yup.string().required().min(3).max(15),
      email: yup.string().email().required(),
      password: yup
        .string()
        .required()
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/,
          {
            message:
              'Password must contain at least one letter, one number and one special character',
          }
        ),
    }),
  });

  const handleForm = (e) => {
    const { target } = e;
    formik.setFieldValue(target.name, target.value);
    formik.setFieldValue(target.email, target.value);
    formik.setFieldValue(target.password, target.value);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-violet-500 underline">
        Form input
      </h1>
      <form
        className="shadow-md shadow-violet-500 p-5 rounded-md flex flex-col"
        onSubmit={formik.handleSubmit}>
        <label className="text-violet-500 font-medium" htmlFor="name">
          Name
        </label>
        <input
          className={`p-2 mb-3 bg-slate-200 rounded-md ${
            formik.touched.name && formik.errors.name
              ? 'border-red-500 border-2'
              : 'border-slate-200 border-2'
          }`}
          type="text"
          name="name"
          onChange={handleForm}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500">{formik.errors.name}</div>
        ) : null}

        <label className="text-violet-500 font-medium" htmlFor="email">
          Email
        </label>
        <input
          className="p-2 bg-slate-200 mb-3 rounded-md"
          type="email"
          name="email"
          onChange={handleForm}
        />
        <label className="text-violet-500 font-medium" htmlFor="password">
          Password
        </label>
        <input
          className="p-2 bg-slate-200 mb-3 rounded-md"
          type="password"
          name="password"
          onChange={handleForm}
        />
        <button
          className="px-5 py-2 text-xl font-bold bg-violet-600 text-white rounded-md"
          type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
