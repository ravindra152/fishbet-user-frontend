// 'use client'
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import FishbetLogo from "../../../public/assets/logoImage-removebg.png"
// import Image from 'next/image';
// import Link from 'next/link';

// const SignUp = () => {
//    const [step, setStep] = useState(0);
//    const router = useRouter();
//    const [formData, setFormData] = useState({
//       email: "",
//       password: "",
//       firstName: "",
//       lastName: "",
//       country: "United States",
//       state: "",
//       dob: { month: "", day: "", year: "" },
//       referredBy: ""
//    });

//    useEffect(() => {
//       if (step === 3) {
//          const timer = setTimeout(() => {
//             router.push("/");
//          }, 3000);
//          return () => clearTimeout(timer);
//       }
//    }, [step, router]);

//    const handleChange = (e) => {
//       const { name, value } = e.target;
//       if (["month", "day", "year"].includes(name)) {
//          setFormData((prev) => ({
//             ...prev,
//             dob: { ...prev.dob, [name]: value },
//          }));
//       } else {
//          setFormData((prev) => ({ ...prev, [name]: value }));
//       }
//    };

//    const nextStep = () => {
//       if (step === 1 && formData.email && formData.password) {
//          setStep(2);
//       } else if (
//          step === 2 &&
//          formData.firstName &&
//          formData.lastName &&
//          formData.state &&
//          formData.dob.month &&
//          formData.dob.day &&
//          formData.dob.year
//       ) {
//          setStep(3);
//       }
//    };


//    const responsive = {
//       all: {
//          breakpoint: { max: 4000, min: 0 },
//          items: 1,
//       },
//    };

//    const bannerImages = [
//       'https://storage.googleapis.com/www.mcluck.com/mcluck-images/register/extra-coins-banner-v2.png',
//       'https://storage.googleapis.com/www.mcluck.com/mcluck-images/register/favorite-games-banner-v2.png',
//       'https://storage.googleapis.com/www.mcluck.com/mcluck-images/register/big-wins-banner-v2.png',
//    ];


//    const initialValues = {
//       email: '',
//       password: '',
//       firstName: '',
//       lastName: '',
//       country: 'United States',
//       state: '',
//       dob: {
//          month: '',
//          day: '',
//          year: ''
//       },
//       referredBy: '',
//    };


//    const validationSchemas =
//       Yup.object({
//          email: Yup.string().email('Invalid email').required('Required field'),
//          password: Yup.string().min(6, 'Minimum 6 characters').required('Required field'),
//          firstName: Yup.string().required('First name is required'),
//          lastName: Yup.string().required('Last name is required'),
//          state: Yup.string().required('State is required'),
//          dob: Yup.object({
//             month: Yup.string().required('Month is required'),
//             day: Yup.string().required('Day is required'),
//             year: Yup.string().required('Year is required'),
//          }).required('Date of birth is required'),
//          referredBy: Yup.string().optional(),
//       })


//    const handleSubmit = async (values) => {
//       const errors = await validateForm(values);
//       if (Object.keys(errors).length === 0) {
//          if (step === 0) {
//             setStep(1);
//          } else if (step === 1) {
//             setStep(2);
//          } else {
//             handleSubmit(values);
//          }
//       }
//    };


//    return (
//       <div className="AuthDialogLayout_root__m16b8 AuthDialogLayout_wider__Hd9qK fullscreen-modal">
//          <div className="flex justify-between items-center px-4 py-4 bg-black">
//             <Image
//                src={FishbetLogo}
//                alt="Logo"
//                width={80}
//                className="h-8 cursor-pointer h-[70px]"
//                onClick={() => router.push('/')}
//             />
//             <Link
//                href="/"
//                className="text-gray-500 text-4xl font-bold no-underline me-4"
//                aria-label="Close"
//             >
//                &times;
//             </Link>
//          </div>

//          <div className="RegisterPage_content__ggoos">
//             {/* <div
//           className="styles_scrollWrap__JJePQ styles_root__L_VdV RegisterPage_promoteBanners__utQbR hideNextlArrow"
//           data-testid="carousel-wrapper"
//         >
//           <div
//             className="styles_scrollContainer__juBOU styles_root__pYj3Q styles_scrollContainer__nkZbY"
//             data-testid="carousel-scroll"
//           >
//             <div className="styles_bannerTile__qPuS3">
//               <img
//                 data-banner="true"
//                 src="https://storage.googleapis.com/www.mcluck.com/mcluck-images/register/extra-coins-banner-v2.png"
//                 alt="registration promo banner"
//                 className="styles_registration-promo-banner__q_c6D"
//               />
//             </div>
//             <div className="styles_bannerTile__qPuS3">
//               <img
//                 data-banner="true"
//                 src="https://storage.googleapis.com/www.mcluck.com/mcluck-images/register/favorite-games-banner-v2.png"
//                 alt="registration promo banner"
//                 className="styles_registration-promo-banner__q_c6D"
//               />
//             </div>
//             <div className="styles_bannerTile__qPuS3">
//               <img
//                 data-banner="true"
//                 src="https://storage.googleapis.com/www.mcluck.com/mcluck-images/register/big-wins-banner-v2.png"
//                 alt="registration promo banner"
//                 className="styles_registration-promo-banner__q_c6D"
//               />
//             </div>
//           </div>
//         </div> */}

//             <Carousel
//                responsive={responsive}
//                arrows={false}
//                infinite
//                autoPlay
//                autoPlaySpeed={3000}
//                showDots={false}
//                containerClass="styles_scrollContainer__juBOU styles_root__pYj3Q styles_scrollContainer__nkZbY"
//                itemClass="styles_bannerTile__qPuS3"
//             >
//                {bannerImages.map((src, index) => (
//                   <div key={index}>
//                      <img
//                         data-banner="true"
//                         src={src}
//                         alt="registration promo banner"
//                         className="styles_registration-promo-banner__q_c6D"
//                         style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
//                      />
//                   </div>
//                ))}
//             </Carousel>


//             <div className="MultiStepProgressBar_progressBar__VPU6P RegisterPage_progressSteps__BMCrn">
//                <ol className="MultiStepProgressBar_steps__ZsoRH">
//                   <li className="Step_stepItem__jWI_E">
//                      <div className={`Step_stepItemContent__7iHdw ${step === 0 ? 'active' : ''}`}>1</div>
//                      <div className="SubSteps_progressLine__fbiKy" />
//                   </li>
//                   <li className="Step_stepItem__jWI_E">
//                      <div className={`Step_stepItemContent__7iHdw ${step === 1 ? 'active' : ''}`}>2</div>
//                      <ol className="SubSteps_subSteps__pTopv">
//                         <li className="SubSteps_subStepItem__z69Pu" />
//                         <li className="SubSteps_subStepItem__z69Pu" />
//                      </ol>
//                   </li>
//                   <li className="Step_stepItem__jWI_E">
//                      <div className="Step_stepItemContent__7iHdw disabled">
//                         <img
//                            src="https://storage.googleapis.com/www.mcluck.com/mcluck-images/register/progress-bar/present.svg"
//                            alt="step with img"
//                         />
//                      </div>
//                      <div className="SubSteps_progressLine__fbiKy" />
//                   </li>
//                </ol>
//             </div>

//             <Formik
//                initialValues={initialValues}
//                validationSchema={validationSchemas}
//                onSubmit={async (values, { setSubmitting, validateForm }) => {
//                   const errors = await validateForm();
//                   if (Object.keys(errors).length === 0) {
//                      if (step === 0) {
//                         setStep(1);
//                      } else if (step === 1) {
//                         setStep(2);
//                      } else {
//                         handleSubmit(values);
//                      }
//                   }
//                   setSubmitting(false);
//                }}

//             >
//                <Form className="styles_root__X0WVD">
//                   {step === 0 && (
//                      <>
//                         <div className="mt-input-adornment-root">
//                            <div className="mt-input-root styles_input__F0jYD">
//                               <Field
//                                  type="email"
//                                  name="email"
//                                  placeholder="Email Address"
//                                  className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                               />
//                               <ErrorMessage name="email" component="span" className="mt-input-helper-text" />
//                            </div>
//                            <div className="mt-input-adornment-root mt-[20px]">
//                               <div className="mt-input-root styles_input__F0jYD">
//                                  <Field
//                                     type="password"
//                                     name="password"
//                                     placeholder="Create Password"
//                                     className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                                  />
//                                  <ErrorMessage name="password" component="span" className="mt-input-helper-text" />
//                               </div>
//                            </div>
//                         </div>
//                      </>
//                   )}

//                   {step === 1 && (
//                      <>
//                         <div className="flex gap-2 w-full">
//                            <div className="mt-input-root styles_input__F0jYD">
//                               <Field
//                                  type="text"
//                                  name="firstName"
//                                  placeholder="First Name"
//                                  className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                               />
//                               <ErrorMessage name="firstName" component="span" className="mt-input-helper-text" />
//                            </div>
//                            <div className="mt-input-root styles_input__F0jYD">
//                               <Field
//                                  type="text"
//                                  name="lastName"
//                                  placeholder="Last Name"
//                                  className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                               />
//                               <ErrorMessage name="lastName" component="span" className="mt-input-helper-text" />
//                            </div>
//                         </div>

//                         <div className="flex gap-2 w-full">
//                            <div className="mt-input-root styles_input__F0jYD">
//                               <Field
//                                  type="text"
//                                  name="country"
//                                  value="United States"
//                                  disabled
//                                  className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                               />
//                            </div>
//                            <div className="mt-input-root styles_input__F0jYD">
//                               <Field
//                                  type="text"
//                                  name="state"
//                                  placeholder="Select state"
//                                  className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                               />
//                               <ErrorMessage name="state" component="span" className="mt-input-helper-text" />
//                            </div>
//                         </div>

//                         <div className="flex gap-2">
//                            <div className="mt-input-root styles_input__F0jYD">
//                               <Field
//                                  type="text"
//                                  name="month"
//                                  placeholder="Month"
//                                  className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                               />
//                               <ErrorMessage name="month" component="span" className="mt-input-helper-text" />
//                            </div>
//                            <div className="mt-input-root styles_input__F0jYD">
//                               <Field
//                                  type="text"
//                                  name="day"
//                                  placeholder="Day"
//                                  className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                               />
//                               <ErrorMessage name="day" component="span" className="mt-input-helper-text" />
//                            </div>
//                            <div className="mt-input-root styles_input__F0jYD">
//                               <Field
//                                  type="text"
//                                  name="year"
//                                  placeholder="Year"
//                                  className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                               />
//                               <ErrorMessage name="year" component="span" className="mt-input-helper-text" />
//                            </div>
//                         </div>

//                         <div className="mt-input-root styles_input__F0jYD">
//                            <Field
//                               type="text"
//                               name="referredBy"
//                               placeholder="Referred by (optional)"
//                               className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                            />
//                            <ErrorMessage name="referredBy" component="span" className="mt-input-helper-text" />
//                         </div>
//                      </>
//                   )}

//                   <button type="submit" className="mt-button-base-root mt-button-contained styles_button__R2_kS">
//                      {step === 0 ? 'Next' : 'Submit'}
//                   </button>
//                </Form>
//             </Formik>



//             {/* 
//         <div className="styles_root__FJnZn">
//           <div className="styles_text__puq5u">Or Register with</div>
//         </div>

//         <div className="styles_socialButtons__0LsZl">
//           <button className="mt-button-base-root mt-button-contained styles_root__Gq1Th">
//             <img
//               className="styles_icon__pSJkN"
//               src="https://storage.googleapis.com/www.mcluck.com/mcluck-images/login/google.svg"
//               alt="google logo"
//             />
//           </button>
//           <button className="mt-button-base-root mt-button-contained styles_facebookBtn__whdwz">
//             <img
//               className="styles_fbIcon__Op6xk"
//               src="https://storage.googleapis.com/www.mcluck.com/mcluck-images/login/fb.svg"
//               alt="fb logo"
//             />
//           </button>
//         </div> */}

//             <p className="styles_loginLink__vX7qk">
//                Already got an account? <a href="/sign-in"><span className="styles_link__8yNI_">Login</span></a>
//             </p>
//          </div>
//       </div>
//    );
// };

// export default SignUp;




// 'use client'
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import FishbetLogo from "../../../public/assets/logoImage-removebg.png"
// import Image from 'next/image';
// import Link from 'next/link';

// const SignUp = () => {
//    const [step, setStep] = useState(0);
//    const router = useRouter();
//    const [formData, setFormData] = useState({
//       email: "",
//       password: "",
//       firstName: "",
//       lastName: "",
//       country: "United States",
//       state: "",
//       dob: { month: "", day: "", year: "" },
//       referredBy: ""
//    });

//    useEffect(() => {
//       if (step === 3) {
//          const timer = setTimeout(() => {
//             router.push("/");
//          }, 3000);
//          return () => clearTimeout(timer);
//       }
//    }, [step, router]);

//    const handleChange = (e) => {
//       const { name, value } = e.target;
//       if (["month", "day", "year"].includes(name)) {
//          setFormData((prev) => ({
//             ...prev,
//             dob: { ...prev.dob, [name]: value },
//          }));
//       } else {
//          setFormData((prev) => ({ ...prev, [name]: value }));
//       }
//    };

//    const nextStep = () => {
//       if (step === 1 && formData.email && formData.password) {
//          setStep(2);
//       } else if (
//          step === 2 &&
//          formData.firstName &&
//          formData.lastName &&
//          formData.state &&
//          formData.dob.month &&
//          formData.dob.day &&
//          formData.dob.year
//       ) {
//          setStep(3);
//       }
//    };


//    const responsive = {
//       all: {
//          breakpoint: { max: 4000, min: 0 },
//          items: 1,
//       },
//    };

//    const bannerImages = [
//       'https://storage.googleapis.com/www.mcluck.com/mcluck-images/register/extra-coins-banner-v2.png',
//       'https://storage.googleapis.com/www.mcluck.com/mcluck-images/register/favorite-games-banner-v2.png',
//       'https://storage.googleapis.com/www.mcluck.com/mcluck-images/register/big-wins-banner-v2.png',
//    ];


//    const initialValues = {
//       email: '',
//       password: '',
//       firstName: '',
//       lastName: '',
//       country: 'United States',
//       state: '',
//       dob: {
//          month: '',
//          day: '',
//          year: ''
//       },
//       referredBy: '',
//    };


//    const validationSchemas = [
//       Yup.object({
//          username: Yup.string().required('Username is required'),
//          password: Yup.string().min(6, 'Minimum 6 characters').required('Required'),
//       }),
//       Yup.object({
//          firstName: Yup.string().required('Required'),
//          lastName: Yup.string().required('Required'),
//          state: Yup.string().required('Required'),
//          dob: Yup.object({
//             month: Yup.string().required('Required'),
//             day: Yup.string().required('Required'),
//             year: Yup.string().required('Required'),
//          }),
//          referredBy: Yup.string().optional(),
//       }),
//       null
//    ];



//    const handleSubmit = async (values) => {
//       const errors = await validateForm(values);
//       if (Object.keys(errors).length === 0) {
//          if (step === 0) {
//             setStep(1);
//          } else if (step === 1) {
//             setStep(2);
//          } else {
//             handleSubmit(values);
//          }
//       }
//    };


//    return (
//       <div className="AuthDialogLayout_root__m16b8 AuthDialogLayout_wider__Hd9qK fullscreen-modal">
//          <div className="flex justify-between items-center px-4 py-4 bg-black">
//             <Image
//                src={FishbetLogo}
//                alt="Logo"
//                width={80}
//                className="h-8 cursor-pointer h-[70px]"
//                onClick={() => router.push('/')}
//             />
//             <Link
//                href="/"
//                className="text-gray-500 text-4xl font-bold no-underline me-4"
//                aria-label="Close"
//             >
//                &times;
//             </Link>
//          </div>

//          <div className="RegisterPage_content__ggoos">
//             {/* <div
//           className="styles_scrollWrap__JJePQ styles_root__L_VdV RegisterPage_promoteBanners__utQbR hideNextlArrow"
//           data-testid="carousel-wrapper"
//         >
//           <div
//             className="styles_scrollContainer__juBOU styles_root__pYj3Q styles_scrollContainer__nkZbY"
//             data-testid="carousel-scroll"
//           >
//             <div className="styles_bannerTile__qPuS3">
//               <img
//                 data-banner="true"
//                 src="https://storage.googleapis.com/www.mcluck.com/mcluck-images/register/extra-coins-banner-v2.png"
//                 alt="registration promo banner"
//                 className="styles_registration-promo-banner__q_c6D"
//               />
//             </div>
//             <div className="styles_bannerTile__qPuS3">
//               <img
//                 data-banner="true"
//                 src="https://storage.googleapis.com/www.mcluck.com/mcluck-images/register/favorite-games-banner-v2.png"
//                 alt="registration promo banner"
//                 className="styles_registration-promo-banner__q_c6D"
//               />
//             </div>
//             <div className="styles_bannerTile__qPuS3">
//               <img
//                 data-banner="true"
//                 src="https://storage.googleapis.com/www.mcluck.com/mcluck-images/register/big-wins-banner-v2.png"
//                 alt="registration promo banner"
//                 className="styles_registration-promo-banner__q_c6D"
//               />
//             </div>
//           </div>
//         </div> */}

//             <Carousel
//                responsive={responsive}
//                arrows={false}
//                infinite
//                autoPlay
//                autoPlaySpeed={3000}
//                showDots={false}
//                containerClass="styles_scrollContainer__juBOU styles_root__pYj3Q styles_scrollContainer__nkZbY"
//                itemClass="styles_bannerTile__qPuS3"
//             >
//                {bannerImages.map((src, index) => (
//                   <div key={index}>
//                      <img
//                         data-banner="true"
//                         src={src}
//                         alt="registration promo banner"
//                         className="styles_registration-promo-banner__q_c6D"
//                         style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
//                      />
//                   </div>
//                ))}
//             </Carousel>


//             <div className="MultiStepProgressBar_progressBar__VPU6P RegisterPage_progressSteps__BMCrn">
//                <ol className="MultiStepProgressBar_steps__ZsoRH">
//                   <li className="Step_stepItem__jWI_E">
//                      <div className={`Step_stepItemContent__7iHdw ${step === 0 ? 'active' : ''}`}>1</div>
//                      <div className="SubSteps_progressLine__fbiKy" />
//                   </li>
//                   <li className="Step_stepItem__jWI_E">
//                      <div className={`Step_stepItemContent__7iHdw ${step === 1 ? 'active' : ''}`}>2</div>
//                      <ol className="SubSteps_subSteps__pTopv">
//                         <li className="SubSteps_subStepItem__z69Pu" />
//                         <li className="SubSteps_subStepItem__z69Pu" />
//                      </ol>
//                   </li>
//                   <li className="Step_stepItem__jWI_E">
//                      <div className="Step_stepItemContent__7iHdw disabled">
//                         <img
//                            src="https://storage.googleapis.com/www.mcluck.com/mcluck-images/register/progress-bar/present.svg"
//                            alt="step with img"
//                         />
//                      </div>
//                      <div className="SubSteps_progressLine__fbiKy" />
//                   </li>
//                </ol>
//             </div>

//             <Formik
//                initialValues={initialValues}
//                validationSchema={validationSchemas[step]}
//                onSubmit={async (values, { setSubmitting }) => {
//                   if (step === 0) {
//                      setStep(1);
//                   } else if (step === 1) {
//                      setStep(2);
//                      console.log("All Form Data:", values);
//                   } else if (step === 2) {
//                      setStep(3);
//                   }
//                   setSubmitting(false);
//                }}
//             >

//                <Form className="styles_root__X0WVD">
//                   {step === 0 && (
//                      <>
//                         <div className="mt-input-adornment-root">
//                            <div className="mt-input-root styles_input__F0jYD">
//                               <Field
//                                  type="text"
//                                  name="username"
//                                  autoComplete="off"
//                                  placeholder="Username"
//                                  className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                               />
//                               <ErrorMessage name="username" component="span" className="mt-input-helper-text" />
//                            </div>
//                            <div className="mt-input-adornment-root mt-[20px]">
//                               <div className="mt-input-root styles_input__F0jYD">
//                                  <Field
//                                     type="password"
//                                     name="password"
//                                     placeholder="Create Password"
//                                     className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                                  />
//                                  <ErrorMessage name="password" component="span" className="mt-input-helper-text" />
//                               </div>
//                            </div>
//                         </div>
//                      </>
//                   )}

//                   {step === 1 && (
//                      <>
//                         <div className="flex gap-2 w-full">
//                            <div className="mt-input-root styles_input__F0jYD">
//                               <Field
//                                  type="text"
//                                  name="firstName"
//                                  placeholder="First Name"
//                                  className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                               />
//                               <ErrorMessage name="firstName" component="span" className="mt-input-helper-text" />
//                            </div>
//                            <div className="mt-input-root styles_input__F0jYD">
//                               <Field
//                                  type="text"
//                                  name="lastName"
//                                  placeholder="Last Name"
//                                  className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                               />
//                               <ErrorMessage name="lastName" component="span" className="mt-input-helper-text" />
//                            </div>
//                         </div>

//                         <div className="flex gap-2 w-full">
//                            <div className="mt-input-root styles_input__F0jYD">
//                               <Field
//                                  type="text"
//                                  name="country"
//                                  value="United States"
//                                  disabled
//                                  className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                               />
//                            </div>
//                            <div className="mt-input-root styles_input__F0jYD">
//                               <Field
//                                  type="text"
//                                  name="state"
//                                  placeholder="Select state"
//                                  className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                               />
//                               <ErrorMessage name="state" component="span" className="mt-input-helper-text" />
//                            </div>
//                         </div>

//                         <div className="flex gap-2">
//                            <div className="mt-input-root styles_input__F0jYD">
//                               <Field
//                                  type="text"
//                                  name="dob.month"
//                                  placeholder="Month"
//                                  className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                               />
//                               <ErrorMessage name="dob.month" component="span" className="mt-input-helper-text" />
//                            </div>
//                            <div className="mt-input-root styles_input__F0jYD">
//                               <Field
//                                  type="text"
//                                  name="dob.day"
//                                  placeholder="Day"
//                                  className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                               />
//                               <ErrorMessage name="dob.day" component="span" className="mt-input-helper-text" />
//                            </div>
//                            <div className="mt-input-root styles_input__F0jYD">
//                               <Field
//                                  type="text"
//                                  name="dob.year"
//                                  placeholder="Year"
//                                  className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                               />
//                               <ErrorMessage name="dob.year" component="span" className="mt-input-helper-text" />
//                            </div>
//                         </div>

//                         <div className="mt-input-root styles_input__F0jYD">
//                            <Field
//                               type="text"
//                               name="referredBy"
//                               placeholder="Referred by (optional)"
//                               className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
//                            />
//                            <ErrorMessage name="referredBy" component="span" className="mt-input-helper-text" />
//                         </div>
//                      </>
//                   )}

//                   <button type="submit" className="mt-button-base-root mt-button-contained styles_button__R2_kS">
//                      {step === 0 ? 'Next' : 'Submit'}
//                   </button>
//                </Form>
//             </Formik>



//             {/* 
//         <div className="styles_root__FJnZn">
//           <div className="styles_text__puq5u">Or Register with</div>
//         </div>

//         <div className="styles_socialButtons__0LsZl">
//           <button className="mt-button-base-root mt-button-contained styles_root__Gq1Th">
//             <img
//               className="styles_icon__pSJkN"
//               src="https://storage.googleapis.com/www.mcluck.com/mcluck-images/login/google.svg"
//               alt="google logo"
//             />
//           </button>
//           <button className="mt-button-base-root mt-button-contained styles_facebookBtn__whdwz">
//             <img
//               className="styles_fbIcon__Op6xk"
//               src="https://storage.googleapis.com/www.mcluck.com/mcluck-images/login/fb.svg"
//               alt="fb logo"
//             />
//           </button>
//         </div> */}

//             <p className="styles_loginLink__vX7qk">
//                Already got an account? <a href="/sign-in"><span className="styles_link__8yNI_">Login</span></a>
//             </p>
//          </div>
//       </div>
//    );
// };

// export default SignUp;

'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FishbetLogo from '../../../public/assets/logoImage-removebg.png';
import Image from 'next/image';
import Link from 'next/link';
import useUserAuth from '../../components/LoginSignup/hooks/useUserAuth';
import { eye, eyeOff } from '@/assets/svg';
import banner from '../../../public/assets/banner-1.png';
import banner2 from '../../../public/assets/banner-2.png';
import banner3 from '../../../public/assets/banner-3.png';

const allMonth = [
   { value: 'select month', label: 'Select Month' },
   { value: '01', label: 'January' },
   { value: '02', label: 'February' },
   { value: '03', label: 'March' },
   { value: '04', label: 'April' },
   { value: '05', label: 'May' },
   { value: '06', label: 'June' },
   { value: '07', label: 'July' },
   { value: '08', label: 'August' },
   { value: '09', label: 'September' },
   { value: '10', label: 'October' },
   { value: '11', label: 'November' },
   { value: '12', label: 'December' }
];

const SignUp = () => {
   const [step, setStep] = useState(0);
   const router = useRouter();
   const [formData, setFormData] = useState({
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      country: 'Country of Residence',
      state: '',
      dob: { month: '', day: '', year: '' },
      referredBy: ''
   });
   const [showPassword, setShowPassword] = useState(false);
   const [toastState, setToastState] = useState({
      showToast: false,
      message: '',
      status: '',
   });

   // const { onSubmit } = useUserAuth({
   //    isSignUp: true,
   //    setToastState,
   //    onSuccess: () => router.push('/'),
   // });

   const { onSubmit } = useUserAuth({
      isSignUp: true,
      setToastState,
      onSuccess: () => {
         setToastState({
            showToast: true,
            message: 'User signed up successfully!',
            status: 'success',
         });
         router.push('/');
      },

      onError: (errorMessage) => {
         setToastState({
            showToast: true,
            message: errorMessage || 'Sign-up failed. Please try again.',
            status: 'error',
         });
      }
   });


   useEffect(() => {
      if (step === 3) {
         const timer = setTimeout(() => {
            router.push('/');
         }, 3000);
         return () => clearTimeout(timer);
      }
   }, [step, router]);

   useEffect(() => {
      if (toastState.showToast) {
         const timer = setTimeout(() => {
            setToastState((prev) => ({
               ...prev,
               showToast: false,
               message: '',
               status: '',
            }));
         }, 4000);

         return () => clearTimeout(timer);
      }
   }, [toastState.showToast]);

   const nextStep = (value, idx) => {
      if (step === 0) {
         setFormData((prev) => ({
            ...prev,
            username: value.username,
            password: value.password,
         }));
         console.log(idx);
         setStep(1);
      } else if (step === 1) {
         setFormData((prev) => ({
            ...prev,
            firstName: value.firstName,
            lastName: value.lastName,
            state: value.state,
            dob: value.dob,
            referredBy: value.referredBy,
         }));
         setStep(2);
      }
   };

   const responsive = {
      all: {
         breakpoint: { max: 4000, min: 0 },
         items: 1,
      },
   };
   const bannerImages = [banner, banner2, banner3];
   const initialValues = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      country: 'Country of Residence',
      state: '',
      dob: {
         month: '',
         day: '',
         year: ''
      },
      referredBy: '',
   };
   const validationSchemas = [
      Yup.object({
         username: Yup.string()
            .required('Username is required')
            .matches(/^[A-Za-z][A-Za-z0-9_]*$/, 'Username must start with a letter and contain only letters, numbers, or underscores'),
         password: Yup.string()
            .min(6, 'Minimum 6 characters')
            .required('Password is required')
            .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/, 'Password must contain letters and numbers'),
      }),
      Yup.object({
         firstName: Yup.string()
            .required('First name is required')
            .matches(/^[A-Za-z\s]+$/, 'First name must contain only letters'),
         lastName: Yup.string()
            .required('Last name is required')
            .matches(/^[A-Za-z\s]+$/, 'Last name must contain only letters'),
         state: Yup.string()
            .required('State is required')
            .matches(/^[A-Za-z\s]+$/, 'State must contain only letters'),
         dob: Yup.object({
            month: Yup.string()
               .required('Month is required')
               .matches(/^(0?[1-9]|1[0-2])$/, 'Enter valid month (1-12)'),
            day: Yup.string()
               .required('Day is required')
               .matches(/^(0?[1-9]|[12][0-9]|3[01])$/, 'Enter valid day (1-31)'),
            year: Yup.string()
               .required('Year is required')
               .matches(/^\d{4}$/, 'Enter valid 4-digit year')
               .test('is-18', 'You have to be 18 years or older', function (year) {
                  return year < 2007;
               }),

         }),
         referredBy: Yup.string().optional(),
      }),

      null
   ];


   return (
      <div className="AuthDialogLayout_root__m16b8 AuthDialogLayout_wider__Hd9qK fullscreen-modal !sm:block !sm:justify-start">
         <div className="flex justify-between items-center px-4 py-4 bg-black">
            <Image
               src={FishbetLogo}
               alt="Logo"
               width={80}
               className="h-8 cursor-pointer h-[70px]"
               onClick={() => router.push('/')}
            />
            <Link
               href="/"
               className="text-gray-500 text-4xl font-bold no-underline me-4"
               aria-label="Close"
            >
               &times;
            </Link>
         </div>

         {toastState.showToast && (
            <div
               className={`fixed top-4 right-4 z-50 w-[55%] sm:w-[45%] md:w-[30%] text-black font-semibold border shadow-lg rounded-md p-4 ${toastState.status === 'success' ? 'bg-green-400 border-green-500' : 'bg-red-400 border-red-500'
                  } flex items-center justify-between space-x-2 overflow-hidden transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full me-2`}
            >
               <div className="grid gap-1">
                  <div className="text-sm font-semibold [&+div]:text-xs">{toastState.status === 'success' ? 'Success!' : 'Error!'}</div>
                  <div className="text-sm opacity-90">{toastState.message}</div>
               </div>
               <button
                  type="button"
                  className="text-gray-500 text-lg font-bold no-underline me-4 absolute right-1 top-1 rounded-md p-1 text-foreground/50"
                  onClick={() => setToastState({ ...toastState, showToast: false })}
               >
                  &times;
               </button>
            </div>
         )}

         <div className="RegisterPage_content__ggoos">
            <Carousel
               responsive={responsive}
               arrows={true}
               infinite
               // autoPlay
               autoPlaySpeed={3000}
               showDots={true}
               containerClass="styles_scrollContainer__juBOU styles_root__pYj3Q styles_scrollContainer__nkZbY"
               itemClass="styles_bannerTile__qPuS3"
            >
               {bannerImages.map((src, index) => (
                  <div key={index} className="styles_bannerTile__qPuS3-sign-up">
                     <Image
                        data-banner="true"
                        src={src}
                        alt="registration promo banner"
                        className="styles_registration-promo-banner__q_c6D w-full"
                     />
                  </div>
               ))}
            </Carousel>

            <div className="MultiStepProgressBar_progressBar__VPU6P RegisterPage_progressSteps__BMCrn">
               <ol className="MultiStepProgressBar_steps__ZsoRH">
                  {
                     step === 1 &&
                     <button data-disabled="false" onClick={() => setStep(0)} className="!px-4 mt-button-base-root mt-icon-button-root mt-icon-button-root-sizeMedium MultiStepProgressBar_backBtn__x0g3g BackButton_backButton__2ujku BackButton_black__ahQIg" data-testid="modal-back-button" aria-label="back button" data-test="modal-back-button"><span className="mt-icon-button-label"><img className="BackButton_icon__6776N" src="https://storage.googleapis.com/www.mcluck.com/mcluck-images/common/left.svg" width="16" height="16" alt="arrow-left" /></span></button>
                  }
                  <li className="Step_stepItem__jWI_E">
                     <div className={`Step_stepItemContent__7iHdw ${step === 0 ? 'active' : ''}`}>1</div>
                     <div className="SubSteps_progressLine__fbiKy" />
                  </li>
                  <li className="Step_stepItem__jWI_E">
                     <div className={`Step_stepItemContent__7iHdw ${step === 1 ? 'active' : ''}`}>2</div>
                     <ol className="SubSteps_subSteps__pTopv">
                        <li className="SubSteps_subStepItem__z69Pu" />
                        <li className="SubSteps_subStepItem__z69Pu" />
                     </ol>
                  </li>
                  <li className="Step_stepItem__jWI_E">
                     <div className="Step_stepItemContent__7iHdw disabled">
                        <img
                           src="https://storage.googleapis.com/www.mcluck.com/mcluck-images/register/progress-bar/present.svg"
                           alt="step with img"
                        />
                     </div>
                     <div className="SubSteps_progressLine__fbiKy" />
                  </li>
               </ol>
            </div>

            <Formik
               initialValues={initialValues}
               validationSchema={validationSchemas[step]}
               onSubmit={onSubmit}
               enableReinitialize={true}
            >
               {({ isValid, dirty }) => (
                  <Form className="styles_root__X0WVD">
                     {step === 0 && (
                        <>
                           <div className="mt-input-adornment-root">
                              <div className="mt-input-root styles_input__F0jYD">
                                 <Field
                                    type="text"
                                    name="username"
                                    autoComplete="off"
                                    placeholder="Username"
                                    className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
                                 />
                                 <ErrorMessage name="username" component="span" className="mt-input-helper-text" />
                              </div>
                              <div className="relative mt-input-root styles_input__F0jYD mt-[20px]">
                                 <Field
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    autoComplete="off"
                                    placeholder="Password"
                                    className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design pr-10"
                                 />
                                 <span
                                    className="absolute right-3 top-[28px] transform -translate-y-1/2 cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                 >
                                    {showPassword ? (
                                       <Image src={eyeOff} alt="eye-off" />
                                    ) : (
                                       <Image src={eye} alt="eye" />
                                    )}
                                 </span>
                                 <ErrorMessage name="password" component="span" className="mt-input-helper-text" />
                              </div>
                           </div>
                        </>
                     )}

                     {step === 1 && (
                        <>
                           <div className="flex gap-2 w-full">
                              <div className="mt-input-root styles_input__F0jYD">
                                 <Field
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name"
                                    className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
                                 />
                                 <ErrorMessage name="firstName" component="span" className="mt-input-helper-text" />
                              </div>
                              <div className="mt-input-root styles_input__F0jYD">
                                 <Field
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
                                 />
                                 <ErrorMessage name="lastName" component="span" className="mt-input-helper-text" />
                              </div>
                           </div>

                           <div className="flex gap-2 w-full">
                              <div className="mt-input-root styles_input__F0jYD">
                                 <Field
                                    type="text"
                                    name="country"
                                    value="Country of Residence"
                                    disabled
                                    className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design cursor-no-drop !select-none"
                                 />
                              </div>
                              <div className="mt-input-root styles_input__F0jYD">
                                 <Field
                                    type="text"
                                    name="state"
                                    placeholder="Select state"
                                    className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
                                 />
                                 <ErrorMessage name="state" component="span" className="mt-input-helper-text" />
                              </div>
                           </div>

                           <div className="text-xs text-[#ccc] font-semibold ml-2">Date Of Birth<span className="text-red-600 ml-1">*</span></div>
                           <div className="flex gap-2 w-full">
                              <Field as="select" name="dob.month" className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design">
                                 {allMonth.map((month) => (
                                    <option key={month.value} value={month.value}>
                                       {month.label}
                                    </option>
                                 ))}
                              </Field>
                              <div className="mt-input-root styles_input__F0jYD">
                                 <Field
                                    type="text"
                                    name="dob.day"
                                    placeholder="Day"
                                    className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
                                 />
                                 <ErrorMessage name="dob.day" component="span" className="mt-input-helper-text" />
                              </div>
                              <div className="mt-input-root styles_input__F0jYD">
                                 <Field
                                    type="text"
                                    name="dob.year"
                                    placeholder="Year"
                                    className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
                                 />
                                 <ErrorMessage name="dob.year" component="span" className="mt-input-helper-text" />
                              </div>
                           </div>

                           <div className="mt-input-root styles_input__F0jYD">
                              <Field
                                 type="text"
                                 name="referredBy"
                                 placeholder="Referred by (optional)"
                                 className="mt-input-base mt-input-outlined new-input-design new-signin-signup-button-design"
                              />
                              <ErrorMessage name="referredBy" component="span" className="mt-input-helper-text" />
                           </div>
                        </>
                     )}

                     <button type="submit" className="mt-button-base-root mt-button-contained styles_button__R2_kS" onClick={() => nextStep(formData, step)}
                        disabled={!isValid || !dirty}
                     >
                        {step === 0 ? 'Next' : 'Submit'}
                     </button>
                  </Form>
               )}
            </Formik>

            <p className="styles_loginLink__vX7qk">
               Already got an account? <a href="/sign-in"><span className="styles_link__8yNI_">Login</span></a>
            </p>
         </div>
      </div>
   );
};

export default SignUp;