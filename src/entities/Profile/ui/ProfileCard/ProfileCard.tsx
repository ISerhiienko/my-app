import { classNames, Mods } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Country, Currency } from "shared/const/common";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { CurrencySelect } from "entities/Currency";
import { CountrySelect } from "entities/Country";
import { HStack, VStack } from "shared/ui/Stack";
import { Profile } from "../../model/types/profile";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string
    isLoading?: boolean;
    readonly?: boolean;
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = ({
    className,
    data,
    error,
    isLoading,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency,

}: ProfileCardProps) => {
    const { t } = useTranslation("profile");

    if (isLoading) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </HStack>
        );
    }

    if (error) {
        return (
            <HStack justify="center" max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t("Виникла помилки при завантаженні профілю")}
                    text={t("Спробуйте оновити сторінку")}
                    align={TextAlign.CENTER}
                />
            </HStack>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <VStack gap="16" max className={classNames(cls.ProfileCard, mods, [className])}>
            {data?.avatar && (
                <HStack justify="center" max className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} />
                </HStack>
            )}
            <Input
                value={data?.first}
                placeholder={t("Ваше ім'я")}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
            />
            <Input
                value={data?.lastname}
                placeholder={t("Ваша фамілія")}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
            />
            <Input
                value={data?.age}
                placeholder={t("Ваш вік")}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t("Місто")}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t("Введіть ім'я користувача")}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t("Введіть посилання на товар")}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </VStack>
    );
};
