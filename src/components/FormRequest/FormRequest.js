import React, {useState} from 'react';
import axios from 'axios';
import qs from 'qs';
import {ButtonStyled, ErrorTextStyled, FormRequestWrapper, InputStyled, ItemWrapper, LabelFieldStyled, SocialWrapper, ButtonWrapper} from './styles';
import {useForm} from 'react-hook-form';
import {Checkbox} from './Checkbox';
import links from '../constLinks';
import telegram from '../../images/social-icons/telegram2.png';
import whatsapp from '../../images/social-icons/whatsapp2.png';
import vk from '../../images/social-icons/vk2.png';
import inst from '../../images/social-icons/inst2.png';

export const FormRequest = () => {
    const [submitStatus, setSubmitStatus] = useState(null);
    const defaultValues = {
        siteType: null,
        siteExsistUrl: null,
        clientName: null,
        email: null,
        contacts: null,
        exampleSitesUrls: null,
        functionOfSite: null,
        designSite: null,
        regionAudit: null,
        auditorsSite: null,
    };

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: {errors},
        reset,
    } = useForm(defaultValues);

    const onSubmit = (dataObj) => {
        const data = qs.stringify(dataObj);

        axios
            .post('https://webreznov-landing-site-request.herokuapp.com/api/email/add', data, {
                headers: {'content-type': 'application/x-www-form-urlencoded'},
            })
            .then(() => {
                setSubmitStatus('Success! We will be contact soon :)');
                reset(defaultValues);
            })
            .catch((err) => setSubmitStatus(`Error code ${err.response.status} :(`));
    };

    const handlerCheckbox = () => {
        setValue('showSiteType', !watch('showSiteType'));
        setValue('siteType', '');
    };

    return (
        <FormRequestWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>

                    <ItemWrapper>
                        {errors.siteType && <ErrorTextStyled>Please provide this data for guranteed response.</ErrorTextStyled>}
                        <span>What do you want site type?</span>
                        <Checkbox
                            onClick={() => setValue('siteType', 'Corporate site')}
                            selected={watch('siteType') === 'Corporate site'}
                            label='Corporate site'
                        />
                        <Checkbox
                            onClick={() => setValue('siteType', 'Web shop')}
                            selected={watch('siteType') === 'Web shop'}
                            label='Web shop'
                        />
                        <Checkbox
                            onClick={() => setValue('siteType', 'Promo-site')}
                            selected={watch('siteType') === 'Promo-site'}
                            label='Promo-site'
                        />
                        <Checkbox
                            onClick={() => setValue('siteType', 'Corporate portal')}
                            selected={watch('siteType') === 'Corporate portal'}
                            label='Corporate portal'
                        />
                        <Checkbox
                            onClick={() => setValue('siteType', 'Web-application')}
                            selected={watch('siteType') === 'Web-application'}
                            label='Web-application'
                        />
                        <Checkbox onClick={() => handlerCheckbox()} selected={watch('showSiteType')} label='Another...' />
                        {watch('showSiteType') && <InputStyled placeholder='Another...' {...register('siteType', {required: true})} />}
                    </ItemWrapper>

                    <ItemWrapper>
                        {watch('designSite') && <LabelFieldStyled>Do you wnat complex design?</LabelFieldStyled>}
                        <InputStyled placeholder='Do you wnat complex design?' {...register('designSite')} />
                    </ItemWrapper>

                    <ItemWrapper>
                        {watch('auditorsSite') && <LabelFieldStyled>How many audiences does the site have?</LabelFieldStyled>}
                        <InputStyled placeholder='How many audiences does the site have?' {...register('auditorsSite')} />
                    </ItemWrapper>

                    <ItemWrapper>
                        {watch('exampleSitesUrls') && (
                            <LabelFieldStyled>Please, provide 3 example sites</LabelFieldStyled>
                        )}
                        <InputStyled
                            placeholder='Please, provide 3 example sites'
                            {...register('exampleSitesUrls')}
                        />
                    </ItemWrapper>

                    <ItemWrapper>
                        {watch('siteExsistUrl') && <LabelFieldStyled>If you have site, provide link please</LabelFieldStyled>}
                        <InputStyled placeholder='If you have site, provide link please' {...register('siteExsistUrl')} />
                    </ItemWrapper>

                    <ItemWrapper>
                        {watch('functionOfSite') && <LabelFieldStyled>What functions should the site perform?</LabelFieldStyled>}
                        <InputStyled placeholder='What functions should the site perform?' {...register('functionOfSite')} />
                    </ItemWrapper>

                    <ItemWrapper>
                        {watch('regionAudit') && <LabelFieldStyled>What is the region of the site’s audience?(location)</LabelFieldStyled>}
                        <InputStyled placeholder='What is the region of the site’s audience?(местоположение)' {...register('regionAudit')} />
                    </ItemWrapper>

                    <ItemWrapper>
                        {errors.clientName && <ErrorTextStyled>Please provide this data for guranteed response.</ErrorTextStyled>}
                        {watch('clientName') && <LabelFieldStyled>Your name</LabelFieldStyled>}
                        <InputStyled placeholder='Your name' {...register('clientName', {required: true})} />
                    </ItemWrapper>

                    <ItemWrapper>
                        {errors.email && <ErrorTextStyled>Please provide this data for guranteed response.</ErrorTextStyled>}
                        {watch('email') && <LabelFieldStyled>Email</LabelFieldStyled>}
                        <InputStyled placeholder='Email' {...register('email', {required: true})} />
                    </ItemWrapper>

                    <ItemWrapper>
                        {watch('contacts') && <LabelFieldStyled>Another contacts</LabelFieldStyled>}
                        <InputStyled placeholder='Another contacts' {...register('contacts')} />
                    </ItemWrapper>

                    <ButtonWrapper>
                        <ButtonStyled type='submit' value='Send request' />
                        <span className='status'>{submitStatus}</span>
                    </ButtonWrapper>

            </form>
            <SocialWrapper>
                <a href={links.TELEGRAM} rel='noreferrer' target='_blank'>
                    <img src={telegram} alt='telegram' />
                </a>
                <a href={links.WHATSUP} rel='noreferrer' target='_blank'>
                    <img src={whatsapp} alt='telegram' />
                </a>
                <div className='separate'></div>
                <a href={links.VK} rel='noreferrer' target='_blank'>
                    <img src={vk} alt='vk' />
                </a>
                <a href={links.INST} rel='noreferrer' target='_blank'>
                    <img src={inst} alt='inst' />
                </a>
            </SocialWrapper>
        </FormRequestWrapper>
    );
};
