'use client'
import React, { ReactElement, cloneElement, useEffect, useRef, useState } from 'react'
import { RxChevronDown, RxChevronUp } from 'react-icons/rx'

type AccordionProps = {
	children: ReactElement[]
	className?: string
	animated?: boolean
	defaultOpenItem?: string
}

export const Accordion: React.FC<AccordionProps> = ({
	children,
	className,
	animated = true,
	defaultOpenItem,
}) => {
	const [openItem, setOpenItem] = useState<string | null>(defaultOpenItem || null)

	const handleItemClick = (value: string) => {
		setOpenItem(openItem === value ? null : value)
	}

	return (
		<div className={className}>
			{React.Children.map(children, (child) =>
				cloneElement(child, {
					isOpen: child.props.value === openItem,
					onToggle: () => handleItemClick(child.props.value),
					animated,
				})
			)}
		</div>
	)
}

Accordion.displayName = 'Accordion'

type AccordionItemProps = {
	value: string
	isOpen?: boolean
	onToggle?: () => void
	children: React.ReactNode
	animated?: boolean
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
	isOpen = false,
	onToggle,
	children,
	animated,
}) => {
	return (
		<div className="border-b-2 border-b-slate-200 bg-white dark:border-b-slate-800 dark:bg-slate-950">
			{React.Children.map(children, (child) =>
				cloneElement(child as React.ReactElement<any>, {
					isOpen,
					onToggle,
					animated,
				})
			)}
		</div>
	)
}

AccordionItem.displayName = 'AccordionItem'

type AccordionTriggerProps = {
	isOpen?: boolean
	onToggle?: () => void
	children: React.ReactNode
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
	onToggle,
	children,
	isOpen,
}) => {
	return (
		<button
			onClick={onToggle}
			className="w-full px-4 py-2 text-left text-lg font-bold text-slate-950 hover:underline dark:text-white"
		>
			{children}
			<span className="float-right">{isOpen ? <RxChevronUp /> : <RxChevronDown />}</span>
		</button>
	)
}

AccordionTrigger.displayName = 'AccordionTrigger'

type AccordionContentProps = {
	isOpen?: boolean
	onToggle?: () => void
	children: React.ReactNode
	animated?: boolean
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
	isOpen = false,
	children,
	animated,
}) => {
	const contentRef = useRef<HTMLDivElement>(null)
	const [maxHeight, setMaxHeight] = useState<string>(isOpen ? 'none' : '0')

	useEffect(() => {
		if (isOpen) {
			setMaxHeight(`${contentRef.current?.scrollHeight ?? 0}px`)
		} else {
			setMaxHeight('0')
		}
	}, [isOpen])

	return (
		<div
			ref={contentRef}
			className={`overflow-hidden ${animated ? 'transition-[max-height] duration-300 ease-in-out' : ''}`}
			style={{ maxHeight }}
		>
			<div className="bg-slate-200 p-4 text-slate-950 dark:bg-slate-800 dark:text-slate-400">
				{children}
			</div>
		</div>
	)
}

AccordionContent.displayName = 'AccordionContent'
