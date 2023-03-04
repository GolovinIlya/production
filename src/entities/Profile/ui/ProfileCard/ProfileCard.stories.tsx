import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ProfileCard } from "./ProfileCard";
import avatar from "shared/assets/tests/storybook.jpg";

export default {
    title: "entities/ProfileCard",
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: "admin",
        age: 22,
        country: Country.Russia,
        lastname: "golovin",
        first: "ilya",
        city: "ul",
        currency: Currency.RUB,
        avatar: avatar,
    },
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};

export const withError = Template.bind({});
withError.args = {
    error: "true",
};
