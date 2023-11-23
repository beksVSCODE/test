import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FormType } from '../../../types';
import { FormInput } from './FormInput';
import { Container } from '../layouts/Container';
import { MainButton } from '../ui/MainButton';

export const Form = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<FormType>({ defaultValues: { text: '' } });

    const onSubmit = async (data: FormType) => {
        console.log(data);
        try {
            toast.success('Successfully sended!');
            reset();
        } catch (err) {
            toast.success('Reference error. Try later.');
            reset();
        }
    };

    return (
        <section id="form" className="mb-24">
            <Container>
                <div className="form-gradient py-20 px-10 max-sm:py-12 max-sm:px-3">
                    <div className="max-w-[1060px] w-full mx-auto">
                        <div className="max-w-[541px] w-full mx-auto">
                            <h3 className="text-l36 max-md:text-md24 font-bold uppercase text-center mb-8">
                                Join hydra
                            </h3>
                            <span className="w-full h-[2px] form-line rounded-full block mb-5" />
                            <p className="text-l32 font-thin mb-12 max-sm:text-md24 text-center">
                                Let’s Build Your VR Experience
                            </p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                            <div className="flex justify-between items-center gap-5 mb-10 max-sm:flex-col max-sm:mb-5">
                                <FormInput
                                    name="firstName"
                                    placeholder="First Name"
                                    register={register('firstName', {
                                        required: `First name is required field`,
                                    })}
                                    type="text"
                                    errors={errors.firstName}
                                />
                                <FormInput
                                    name="lastName"
                                    placeholder="Last Name"
                                    register={register('lastName', {
                                        required: `Last name is required field`,
                                    })}
                                    type="text"
                                    errors={errors.lastName}
                                />
                            </div>
                            <div className="flex justify-between items-center gap-5 mb-10 max-sm:flex-col max-sm:mb-5">
                                <FormInput
                                    name="email"
                                    placeholder="Email"
                                    register={register('email', {
                                        required: `First name is required field`,
                                    })}
                                    type="email"
                                    errors={errors.email}
                                />
                                <FormInput
                                    name="phoneNumber"
                                    placeholder="Phone Number"
                                    register={register('phoneNumber', {
                                        required: `Phone number is required field`,
                                    })}
                                    type="text"
                                    errors={errors.phoneNumber}
                                />
                            </div>
                            <div className="mb-10">
                                <FormInput
                                    name="subject"
                                    placeholder="Subject"
                                    register={register('subject', {
                                        required: `Subject number is required field`,
                                    })}
                                    type="text"
                                    errors={errors.subject}
                                />
                            </div>
                            <Controller
                                name="text"
                                control={control}
                                render={({ field }) => (
                                    <textarea
                                        {...field}
                                        className="bg-transparent outline-none focus:border-inputFocus placeholder::opacity-50 border-2 py-5 px-10 rounded-[40px] border-white w-full text-white text-medium text-s14 min-h-[200px] mb-10"
                                        placeholder={`Tell Us Something...`}
                                    />
                                )}
                            />
                            <div className="text-center">
                                <MainButton type="submit" children={'Send to hydra'} />
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </section>
    );
};
