export const ModalInfoBlockData = [
    {
        id:1,
        reward: 'Bamboo Stand',
        description: `You get an ergonomic stand made of natural bamboo. Youve helped us launch our promotional campaign, and you’ll be added to a special Backer member list.`,
        pledge: 25,
        remaining: 101,
    },
    {   
        id:2,
        reward: 'Black Edition Stand',
        description: `You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included`,
        pledge: 75,
        remaining: 64,
    },
    {
        id:3,
        reward: 'Mahogany Special Edition',
        description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.`,
        pledge: 200,
        remaining: 0,
    },
]

export const getData = () => {
    const data = ModalInfoBlockData.map(line => {
        const item = {
            id:line.id,
            reward:line.reward,
        }
        return item
    })

    return data
}
