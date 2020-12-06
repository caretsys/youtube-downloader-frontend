import { Input, Form, Select, Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 90 }}>
      <Select.Option value="A">Audio</Select.Option>
      <Select.Option value="V">Video</Select.Option>
    </Select>
  </Form.Item>
)

const SearchFile = ({ onSearch, isLoading }) => {
  const [form] = Form.useForm()
  return (
    <Form
      layout="inline"
      onFinish={onSearch}
      form={form}
      style={{ width: '100%' }}
      initialValues={{ prefix: 'A' }}
    >
      <Form.Item name="url" style={{ width: '80%' }}>
        <Input
          addonBefore={prefixSelector}
          placeholder="e.g. https://www.youtube.com/watch?v=UxJcdeQ0vPI"
        />
      </Form.Item>
      <Form.Item style={{ width: '15%' }}>
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
          icon={<DownloadOutlined />}
        >
          Download
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SearchFile
