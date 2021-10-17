import React from 'react';
import axios from 'axios';
import qs from 'qs';
import {ButtonStyled, ErrorTextStyled, FormRequestWrapper, InputStyled, ItemWrapper, LabelFieldStyled, SocialWrapper} from './styles';
import {useForm} from 'react-hook-form';
import {Checkbox} from './Checkbox';
import links from '../constLinks';
import telegram from '../../images/social-icons/telegram2.png';
import whatsapp from '../../images/social-icons/whatsapp2.png';
import vk from '../../images/social-icons/vk2.png';
import inst from '../../images/social-icons/inst2.png';

export const FormRequest = () => {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: {errors},
    } = useForm();

    const onSubmit = (dataObj) => {
        // const data = qs.stringify(dataObj);
        console.log(qs.stringify(dataObj));

        // axios.post('http://localhost:8084/api/email/add', data);
        axios({
            method: 'POST',
            headers: {'content-type': 'application/x-www-form-urlencoded'},
            data: qs.stringify(dataObj),
            url: 'http://localhost:8084/api/email/add',
        });
    };

    const handlerCheckbox = () => {
        setValue('showSiteType', !watch('showSiteType'));
        setValue('siteType', '');
    };

    return (
        <FormRequestWrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <ItemWrapper>
                        {errors.siteType && <ErrorTextStyled>Это поле обязательное</ErrorTextStyled>}
                        <span>Какой сайт вы хотите?</span>
                        <Checkbox
                            onClick={() => setValue('siteType', 'Корпоративный сайт')}
                            selected={watch('siteType') === 'Корпоративный сайт'}
                            label='Корпоративный сайт'
                        />
                        <Checkbox
                            onClick={() => setValue('siteType', 'Интернет-магазин')}
                            selected={watch('siteType') === 'Интернет-магазин'}
                            label='Интернет-магазин'
                        />
                        <Checkbox
                            onClick={() => setValue('siteType', 'Сайт-визитку')}
                            selected={watch('siteType') === 'Сайт-визитку'}
                            label='Сайт-визитку'
                        />
                        <Checkbox
                            onClick={() => setValue('siteType', 'Корпоративный портал')}
                            selected={watch('siteType') === 'Корпоративный портал'}
                            label='Корпоративный портал'
                        />
                        <Checkbox
                            onClick={() => setValue('siteType', 'Веб-приложение')}
                            selected={watch('siteType') === 'Веб-приложение'}
                            label='Веб-приложение'
                        />
                        <Checkbox onClick={() => handlerCheckbox()} selected={watch('showSiteType')} label='Другое...' />
                        {watch('showSiteType') && <InputStyled placeholder='Другое...' {...register('siteType', {required: true})} />}
                    </ItemWrapper>

                    <ItemWrapper>
                        {watch('designSite') && <LabelFieldStyled>Насколько сложным должен быть дизайн?</LabelFieldStyled>}
                        <InputStyled placeholder='Насколько сложным должен быть дизайн?' {...register('designSite')} />
                    </ItemWrapper>

                    <ItemWrapper>
                        {watch('auditorsSite') && <LabelFieldStyled>Сколько аудиторий у сайта?</LabelFieldStyled>}
                        <InputStyled placeholder='Сколько аудиторий у сайта?' {...register('auditorsSite')} />
                    </ItemWrapper>

                    <ItemWrapper>
                        {watch('exampleSitesUrls') && (
                            <LabelFieldStyled>Укажите 3 примера сайтов, где вам нравится дизайн и укажите почему</LabelFieldStyled>
                        )}
                        <InputStyled
                            placeholder='Укажите 3 примера сайтов, где вам нравится дизайн и укажите почему'
                            {...register('exampleSitesUrls')}
                        />
                    </ItemWrapper>

                    <ItemWrapper>
                        {watch('siteExsistUrl') && <LabelFieldStyled>Если у вас уже есть сайт, пожалуйста, укажите на него ссылку</LabelFieldStyled>}
                        <InputStyled placeholder='Если у вас уже есть сайт, пожалуйста, укажите на него ссылку' {...register('siteExsistUrl')} />
                    </ItemWrapper>

                    <ItemWrapper>
                        {watch('functionOfSite') && <LabelFieldStyled>Какие функции должен выполнять сайт?</LabelFieldStyled>}
                        <InputStyled placeholder='Какие функции должен выполнять сайт?' {...register('functionOfSite')} />
                    </ItemWrapper>

                    <ItemWrapper>
                        {watch('regionAudit') && <LabelFieldStyled>Какой регион у аудитории сайта?(местоположение)</LabelFieldStyled>}
                        <InputStyled placeholder='Какой регион у аудитории сайта?(местоположение)' {...register('regionAudit')} />
                    </ItemWrapper>

                    <ItemWrapper>
                        {errors.clientName && <ErrorTextStyled>Это поле обязательное</ErrorTextStyled>}
                        {watch('clientName') && <LabelFieldStyled>Контактное лицо</LabelFieldStyled>}
                        <InputStyled placeholder='Контактное лицо' {...register('clientName', {required: true})} />
                    </ItemWrapper>

                    <ItemWrapper>
                        {errors.email && <ErrorTextStyled>Это поле обязательное</ErrorTextStyled>}
                        {watch('email') && <LabelFieldStyled>Email</LabelFieldStyled>}
                        <InputStyled placeholder='Email' {...register('email', {required: true})} />
                    </ItemWrapper>

                    <ItemWrapper>
                        {watch('contacts') && <LabelFieldStyled>Дополнительные контакты</LabelFieldStyled>}
                        <InputStyled placeholder='Дополнительные контакты' {...register('contacts')} />
                    </ItemWrapper>

                    <ItemWrapper>
                        <ButtonStyled type='submit' value='Отправить' />
                    </ItemWrapper>
                </div>
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
