import { Form, TextField, Submit } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

import ReposCell from 'src/components/ReposCell'
import { QUERY } from 'src/components/ReposCell'

const CREATE_REPO = gql`
  mutation CreateRepoMutation($input: String!) {
    createRepo(name: $input)
  }
`

const ReposPage = () => {
  const [create] = useMutation(CREATE_REPO, {
    refetchQueries: [{ query: QUERY }],
  })
  const onSubmit = (data) => {
    create({ variables: { input: data.input } })
  }
  return (
    <>
      <h1>Look for Repos</h1>
      <ReposCell />
      <Form onSubmit={onSubmit}>
        <TextField name="input" />
        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ReposPage
