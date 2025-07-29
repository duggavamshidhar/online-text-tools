import TextFieldComponent from '@/components/text-field-component'
import ToolsComponent from '@/components/tools-component'

export default function MainComponent({ title, component }) {
  return (
    <>
      <div className="mx-auto flex flex-col gap-y-1 p-2">
        <div className="text-2xl font-semibold">{title}</div>
        <div className="flex w-full items-center justify-between gap-1">
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
