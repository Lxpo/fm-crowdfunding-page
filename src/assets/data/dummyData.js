export const ProjectStatistics = {
    amount:40000,
    amountNeeded:100000,
    backers:5007,
    daysLeft:56,
}

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

export const setAmount = (amount) => {
    console.log(`amount is type`, typeof(amount))
    ProjectStatistics.amount = Number(amount) + ProjectStatistics.amount
}

export const reduceRemaining = (id) => {
    //Gets the specific reward using the ID
    const reward = ModalInfoBlockData.find(item => item.id == id)
    //Update reward remaining
    let newRemaining = reward.remaining - 1;
    //Get index of the reward
    let index = ModalInfoBlockData.indexOf(reward)
    //Copy object then set new value for specific property
    const updatedReward = {...reward, remaining:newRemaining}
    ModalInfoBlockData[index] = updatedReward
}
