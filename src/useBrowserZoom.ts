import { useState, useEffect, useCallback } from "react"

const getDpr = (): number => {
	return typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1
}

/**
 * React hook to monitor browser zoom level changes by tracking `window.devicePixelRatio`.
 * Updates on every 'resize' event.
 *
 * @returns {number} The current devicePixelRatio value.
 */
export function useBrowserZoom(): number {
	const [dpr, setDpr] = useState<number>(getDpr)

	const handleResizeOrZoom = useCallback(() => {
		const currentDpr = getDpr()

		setDpr((prevDpr) => {
			if (prevDpr !== currentDpr) {
				// console.log(`DPR changed from ${prevDpr.toFixed(2)} to ${currentDpr.toFixed(2)}`)
				return currentDpr
			}

			return prevDpr
		})
	}, [])

	useEffect(() => {
		handleResizeOrZoom()

		window.addEventListener("resize", handleResizeOrZoom)

		return () => {
			window.removeEventListener("resize", handleResizeOrZoom)
		}
	}, [handleResizeOrZoom])

	return dpr
}
