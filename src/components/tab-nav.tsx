'use client'

export type Tab = 'about' | 'work' | 'projects'

const TABS: { id: Tab; label: string }[] = [
  { id: 'about',    label: 'About' },
  { id: 'work',     label: 'Work' },
  { id: 'projects', label: 'Projects' },
]

interface TabNavProps {
  active: Tab
  onChange: (tab: Tab) => void
  orientation?: 'vertical' | 'horizontal'
}

export function TabNav({ active, onChange, orientation = 'vertical' }: TabNavProps) {
  if (orientation === 'horizontal') {
    return (
      <nav className="overflow-x-auto">
        <ul className="flex flex-row gap-6 px-6 pb-3 min-w-max">
          {TABS.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => onChange(tab.id)}
                className={`text-sm font-medium pb-1 transition-colors duration-150 ${
                  active === tab.id
                    ? 'text-accent border-b-2 border-accent'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    )
  }

  return (
    <nav>
      <ul className="flex flex-col gap-1">
        {TABS.map((tab) => (
          <li key={tab.id}>
            <button
              onClick={() => onChange(tab.id)}
              className={`w-full text-left text-sm font-medium py-1.5 transition-colors duration-150 ${
                active === tab.id
                  ? 'text-accent border-l-2 border-accent pl-3'
                  : 'text-text-secondary hover:text-text-primary pl-3.5'
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
