import TextFieldComponent from '@/components/text-field-component'
import ToolsComponent from '@/components/tools-component'

export default function MainComponent({ title, component }) {
  return (
    <>
      <div className="mx-auto p-2 flex max-w-4xl flex-col gap-y-1">
        <div className="text-2xl font-semibold">{title}</div>
        <div className="flex items-center w-full justify-between gap-1">
          <div>{component}</div>
          <>
            <ToolsComponent />
          </>
        </div>
        <TextFieldComponent />
      </div>
    </>
  )
}
